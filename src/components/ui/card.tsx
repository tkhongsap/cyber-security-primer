import * as React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className="rounded-lg border bg-white shadow-sm"
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      className="flex flex-col space-y-1.5 p-6"
      {...props}
    />
  )
}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className="text-2xl font-semibold leading-none tracking-tight"
      {...props}
    />
  )
}

export function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      className="p-6 pt-0"
      {...props}
    />
  )
} 