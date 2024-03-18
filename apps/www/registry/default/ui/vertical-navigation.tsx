import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"

const VerticalNav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mr-2 flex h-screen w-64 flex-col border-e ", className)}
    {...props}
  />
))
VerticalNav.displayName = "VerticalNav"

const VerticalNavHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(" flex flex-row p-3 pt-6", className)}
    {...props}
  />
))
VerticalNavHeader.displayName = "VerticalNavHeader"

const VerticalNavBrand = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ className, ...props }, ref) => (
  <Slot ref={ref} {...props} className={cn("mr-2 h-6 w-6", className)} />
))
VerticalNavBrand.displayName = "VerticalNavBrand"

const VerticalNavDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} {...props} className={cn("", className)} />
))
VerticalNavDescription.displayName = "VerticalNavDescription"

const VerticalNavSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} {...props} className={cn("my-3 space-y-1", className)} />
))
VerticalNavSection.displayName = "VerticalNavSection"

const VerticalNavItem = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <Button
    variant="ghost"
    ref={ref}
    {...props}
    className={cn("flex w-full flex-row justify-start", className)}
  />
))
VerticalNavItem.displayName = "VerticalNavItem"

const VerticalNavItemLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} {...props} className={cn("text-sm", className)} />
))
VerticalNavItemLabel.displayName = "VerticalNavItemLabel"

const VerticalNavFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-auto flex flex-col p-3", className)}
    {...props}
  />
))
VerticalNavFooter.displayName = "VerticalNavFooter"

const VerticalNavItemBadge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "ml-auto flex  h-min self-center rounded-sm border px-2 text-xs text-primary",
      className
    )}
    {...props}
  />
))
VerticalNavItemBadge.displayName = "VerticalNavItemBadge"

const VerticalNavItemIcon = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ className, ...props }, ref) => {
  return <Slot ref={ref} {...props} className={cn("mr-2 h-4 w-4", className)} />
})
VerticalNavItemIcon.displayName = "VerticalNavItemIcon"

const VerticalNavSectionTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    {...props}
    className={cn(
      "mb-2 px-3 text-lg font-semibold tracking-tighter",
      className
    )}
  />
))
VerticalNavSectionTitle.displayName = "VerticalNavSectionTitle"

const VerticalNavContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} {...props} className={cn("flex flex-col px-3", className)} />
))
VerticalNavContent.displayName = "VerticalNavContent"

export {
  VerticalNav,
  VerticalNavHeader,
  VerticalNavBrand,
  VerticalNavDescription,
  VerticalNavSection,
  VerticalNavItem,
  VerticalNavItemLabel,
  VerticalNavFooter,
  VerticalNavItemBadge,
  VerticalNavItemIcon,
  VerticalNavSectionTitle,
  VerticalNavContent,
}
