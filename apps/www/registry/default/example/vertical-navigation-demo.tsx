import avatar from "@/public/avatars/01.png"
import {
  Activity,
  AreaChart,
  Book,
  CheckSquare,
  Grid2X2,
  Mail,
  PieChart,
  Search,
  Settings,
} from "lucide-react"

import {
  VerticalNav,
  VerticalNavBrand,
  VerticalNavContent,
  VerticalNavDescription,
  VerticalNavFooter,
  VerticalNavHeader,
  VerticalNavItem,
  VerticalNavItemBadge,
  VerticalNavItemIcon,
  VerticalNavItemLabel,
  VerticalNavSection,
  VerticalNavSectionTitle,
} from "@/registry/default/ui/vertical-navigation"

import { Avatar, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"

export default function VerticalNavDemo() {
  return (
    <VerticalNav>
      <VerticalNavHeader>
        <VerticalNavBrand>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="h-6 w-6"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
          </svg>
        </VerticalNavBrand>
        <VerticalNavDescription>
          <p className="font-bold">shadcn/ui</p>
        </VerticalNavDescription>
      </VerticalNavHeader>
      <div className="flex flex-row p-3">
        <Button className="rounded-e-none border border-e-0 bg-background pr-0">
          <Search className="text-muted-foreground " />
        </Button>
        <Input placeholder="Search" className="rounded-s-none border-s-0" />
      </div>
      <VerticalNavContent>
        <VerticalNavSection>
          <VerticalNavSectionTitle>App</VerticalNavSectionTitle>
          <VerticalNavItem>
            <VerticalNavItemIcon>
              <AreaChart />
            </VerticalNavItemIcon>
            <VerticalNavItemLabel>Dashboard</VerticalNavItemLabel>
          </VerticalNavItem>
          <VerticalNavItem>
            <VerticalNavItemIcon>
              <Activity />
            </VerticalNavItemIcon>
            <VerticalNavItemLabel>Activity</VerticalNavItemLabel>
            <VerticalNavItemBadge>2</VerticalNavItemBadge>
          </VerticalNavItem>
          <VerticalNavItem>
            <VerticalNavItemIcon>
              <CheckSquare />
            </VerticalNavItemIcon>
            <VerticalNavItemLabel>Tasks</VerticalNavItemLabel>
            <VerticalNavItemBadge>5</VerticalNavItemBadge>
          </VerticalNavItem>
        </VerticalNavSection>

        <Separator />

        <VerticalNavSection>
          <VerticalNavSectionTitle>Stat</VerticalNavSectionTitle>
          <VerticalNavItem>
            <VerticalNavItemIcon>
              <PieChart />
            </VerticalNavItemIcon>
            <VerticalNavItemLabel>Analytics</VerticalNavItemLabel>
          </VerticalNavItem>
          <VerticalNavItem>
            <VerticalNavItemIcon>
              <Grid2X2 />
            </VerticalNavItemIcon>
            <VerticalNavItemLabel>Projects</VerticalNavItemLabel>
          </VerticalNavItem>
          <VerticalNavItem>
            <VerticalNavItemIcon>
              <Settings />
            </VerticalNavItemIcon>
            <VerticalNavItemLabel>Settings</VerticalNavItemLabel>
          </VerticalNavItem>
          <VerticalNavItem>
            <VerticalNavItemIcon>
              <Book />
            </VerticalNavItemIcon>
            <VerticalNavItemLabel>Documentation</VerticalNavItemLabel>
          </VerticalNavItem>
        </VerticalNavSection>
      </VerticalNavContent>
      <VerticalNavFooter>
        <Separator className="mb-3" />
        <VerticalNavItem>
          <VerticalNavItemIcon>
            <Mail />
          </VerticalNavItemIcon>
          <VerticalNavItemLabel>Inbox</VerticalNavItemLabel>
          <VerticalNavItemBadge>1</VerticalNavItemBadge>
        </VerticalNavItem>
        <div className="my-2 flex items-center space-x-4 rounded-lg border px-4 py-2">
          <Avatar>
            <AvatarImage src={avatar.src} />
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">m@example.com</p>
          </div>
        </div>
      </VerticalNavFooter>
    </VerticalNav>
  )
}
