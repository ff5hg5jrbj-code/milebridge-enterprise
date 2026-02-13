'use client'

import { LineChart, Line, ResponsiveContainer, Tooltip, YAxis } from 'recharts'

interface ChartDataPoint {
  month: string
  value: number
}

interface ChartStat {
  label: string
  data: ChartDataPoint[]
  color: string
  yAxisDomain: [number, number]
}

interface StatLineChartProps {
  stat: ChartStat
}

export default function StatLineChart({ stat }: StatLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={stat.data}>
        <defs>
          <linearGradient id={`gradient-${stat.label}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={stat.color} stopOpacity={0.4} />
            <stop offset="100%" stopColor={stat.color} stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <YAxis domain={stat.yAxisDomain} hide />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(0,0,0,0.9)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontSize: '12px',
            padding: '8px 12px'
          }}
          formatter={(value) => {
            if (value === undefined || value === null) return ['-', 'Value']
            return [`${value}%`, 'Value']
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={stat.color}
          strokeWidth={3}
          dot={{ fill: stat.color, r: 4 }}
          activeDot={{ r: 6, fill: stat.color }}
          fill={`url(#gradient-${stat.label})`}
          animationDuration={2000}
          animationEasing="ease-in-out"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
