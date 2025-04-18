'use client'

import {useEffect, useRef, useState} from 'react'

export default function CanvasBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [mode, setMode] = useState<'path' | 'pulse'>('pulse')
    const dotMax = 25

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        const gridSize = 40
        const width = canvas.width 
        const height = canvas.height

        const cols = Math.floor(width / gridSize)
        const rows = Math.floor(height / gridSize)

        const seeds = Array.from({length: 30}, () => ({
            x: Math.floor(Math.random()*cols) * gridSize,
            y: Math.floor(Math.random()*rows) * gridSize,
        }))

        const getClosestSeed = (x: number, y: number) => {
            let minDist = Infinity
            let index = -1
            seeds.forEach((seed, i) => {
                const dist = Math.abs(seed.x-x) + Math.abs(seed.y-y)
                if (dist < minDist) {
                    minDist = dist
                    index = i
                }
            })
            return index
        }

        const segments: {x1: number, y1: number, x2: number, y2: number}[] = []

        for (let x = 0; x < width; x += gridSize) {
            for (let y = 0; y < height; y+= gridSize) {
                const currentSeed = getClosestSeed(x, y)
                const right = getClosestSeed(x+gridSize, y)
                const down = getClosestSeed(x, y+gridSize)

                if (currentSeed !== right) {
                    segments.push({
                        x1: x + gridSize,
                        y1: y,
                        x2: x + gridSize,
                        y2: y + gridSize
                    })
                }

                if (currentSeed !== down) {
                    segments.push({
                        x1: x,
                        y1: y + gridSize,
                        x2: x + gridSize,
                        y2: y + gridSize
                    })
                }
            }
        }

        const pulses = segments.map((segment) => ({
            ...segment,
            progress: Math.random(),
            speed: .005 + Math.random() * .01
        }))

        type PathDot = typeof pulses[number] & {lastX?: number; lastY? : number; px?: number; py?: number}
        const pathDots: PathDot[] = []
        let flash: { x: number; y: number; opacity: number } | null = null

        const spawnPathDot = () => {
            if (pathDots.length >= dotMax) return
            const seg = segments[Math.floor(Math.random() * segments.length)]
            pathDots.push({
                ...seg,
                progress: 0,
                speed: 0.005 + Math.random() * 0.01,
                lastX: seg.x1,
                lastY: seg.y1
            })
        }

        const scheduleNextDot = () => {
            const delay = Math.random() * 3000
            setTimeout(() => {
                spawnPathDot()
                scheduleNextDot()
            }, delay)
        }

        if (mode === 'path') {
            scheduleNextDot()
        }

        function animate() {
            if (!ctx || !canvas) return

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            ctx.strokeStyle = '#0ff'
            ctx.lineWidth = 1

            segments.forEach(({x1, y1, x2, y2}) => {
                ctx.beginPath()
                ctx.moveTo(x1, y1)
                ctx.lineTo(x2, y2)
                ctx.stroke()
            })

            const activeDots = mode === 'pulse' ? pulses : pathDots

            activeDots.forEach((dot, i) => {
                dot.progress += dot.speed
                if (dot.progress > 1) {
                    dot.progress = 0
                    if (mode === 'path') {
                        const options = segments.filter(seg => {
                            const match = 
                                (seg.x1 === dot.x2 && seg.y1 === dot.y2) ||
                                (seg.x2 === dot.x2 && seg.y2 === dot.y2)
                            const notBack = 
                                (seg.x1 !== dot.lastX || seg.y1 !== dot.lastY) &&
                                (seg.x2 !== dot.lastX || seg.y2 !== dot.lastY)
                            return match && notBack
                        }
                            
                        )
                        if (options.length > 0) {
                            const next = options[Math.floor(Math.random() * options.length)]
                            dot.lastX = dot.x2 
                            dot.lastY = dot.y2
                            
                            dot.x1 = dot.x2
                            dot.y1 = dot.y2
                            dot.x2 = next.x1 === dot.x2 && next.y1 === dot.y2 ? next.x2 : next.x1
                            dot.y2 = next.y1 === dot.y2 && next.x1 === dot.x2 ? next.y2 : next.y1
                        } else {
                            pathDots.splice(i, 1)
                            return
                        }
                    }
                }

                const x = dot.x1 + (dot.x2 - dot.x1) * dot.progress
                const y = dot.y1 + (dot.y2 - dot.y1) * dot.progress
                dot.px = x
                dot.py = y

                // Collision detection
                for (let j = 0; j < activeDots.length; j++) {
                    if (i === j) continue;
                    const otherDot = activeDots[j];
                    if (otherDot.px !== undefined && otherDot.py !== undefined) {
                        const dx = x - otherDot.px;
                        const dy = y - otherDot.py;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        const collisionRadius = 4; 
    
                    if (mode === 'path' && distance < collisionRadius) {
                        // Handle collision (e.g., reverse direction, stop, or bounce)
                        const [a, b] = pathDots
                        dot.progress -= dot.speed; // Example: reverse progress slightly
                        otherDot.progress -= otherDot.speed;
                        flash = {x: (a.px + b.px) /2, y: (a.py! + b.py!) / 2, opacity: 1}
                        pathDots.length = 0
                        break;
                    }
                    }
                }

                ctx.beginPath()
                ctx.shadowBlur = 10
                ctx.shadowColor = '#0ff'
                ctx.fillStyle = '#0ff'
                ctx.arc(x, y, 2, 0, Math.PI * 2)
                ctx.fill()
                ctx.shadowBlur = 0
            })



            // if (mode === 'path' && pathDots.length === dotMax) {
            //     const [a, b] = pathDots
            //     if (a.px !== undefined && b.px !== undefined) {
            //         const dx = a.px - b.px
            //         const dy = a.py! - b.py!
            //         const dist = Math.sqrt(dx * dx + dy * dy)
            //         if (dist < 6 && !flash) {
            //             flash = { x: (a.px + b.px) / 2, y: (a.py! + b.py!) / 2, opacity: 1 }
            //             pathDots.length = 0
            //         }
            //     }
            // }

            if (flash) {
                ctx.beginPath()
                ctx.fillStyle = `rgba(255,255,255,${flash.opacity})`
                ctx.arc(flash.x, flash.y, 20, 0, Math.PI * 2)
                ctx.fill()
                flash.opacity -= 0.05
                if (flash.opacity <= 0) flash = null
            }

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [mode])

    return (
        <>
            <canvas
                ref = {canvasRef}
                className = 'fixed inset-0 z-[-10] bg-slate-900' />
            <button
                onClick={() => setMode(mode === 'path' ? 'pulse' : 'path')}
                className="fixed top-4 right-4 z-10 px-4 py-2 bg-black text-cyan-300 border border-cyan-500 rounded"
            >
                Mode: {mode === 'path' ? 'Path (2 Dots)' : 'Pulse (Multiple Dots)'}
            </button>
        </>
    )
}
