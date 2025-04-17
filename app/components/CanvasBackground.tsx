'use client'

import {useEffect, useRef} from 'react'


export default function CanvasBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

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

        const gridSize = 10
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
            seeds.forEach((seed) => {
                const dist = Math.abs(seed.x-x) + Math.abs(seed.y-y)
                if (dist < minDist) {
                    minDist = dist
                    index = seeds.indexOf(seed)
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

        const dots = segments.map((segment) => ({
            ...segment,
            progress: Math.random(),
            speed: .005 + Math.random() * .01
        }))

        function animate() {
            if (!ctx) return
            if (!canvas) return

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            ctx.strokeStyle = '#0ff'
            ctx.lineWidth = 1

            segments.forEach(({x1, y1, x2, y2}) => {
                ctx.beginPath()
                ctx.moveTo(x1, y1)
                ctx.lineTo(x2, y2)
                ctx.stroke()
            })

            dots.forEach((dot) => {
                dot.progress += dot.speed
                if (dot.progress > 1) {
                    dot.progress = 0
                }

                const x = dot.x1 + (dot.x2 - dot.x1) * dot.progress
                const y = dot.y1 + (dot.y2 - dot.y1) * dot.progress

                ctx.beginPath()
                ctx.shadowBlur = 10
                ctx.shadowColor = '#0ff'
                ctx.fillStyle = '#0ff'
                ctx.arc(x, y, 2, 0, Math.PI * 2)
                ctx.fill()
                ctx.shadowBlur = 0
            })

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)

        }
    }, [])

    return (
        <canvas
            ref = {canvasRef}
            className = 'fixed inset-0 z-[-1]' />
    )

}