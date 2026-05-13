"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown, ChevronRight, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface OrgNode {
  id: string
  name: string
  role: string
  image?: string
  department?: string
  children?: OrgNode[]
}

const orgData: OrgNode = {
  id: "ceo",
  name: "Carlos Castro",
  role: "Founder & CEO",
  image: "/team/ceo.jpg",
  children: [
    {
      id: "coo",
      name: "Maria Rodriguez",
      role: "Chief Operations Officer",
      image: "/team/coo.jpg",
      children: [
        {
          id: "ops-manager",
          name: "David Thompson",
          role: "Operations Manager",
          image: "/team/operations-manager.jpg",
          department: "Operations",
          children: [
            {
              id: "field-team",
              name: "Field Teams",
              role: "Safety Professionals",
              department: "Field Operations",
            },
          ],
        },
        {
          id: "project-manager",
          name: "Sarah Chen",
          role: "Project Manager",
          image: "/team/project-manager.jpg",
          department: "Projects",
          children: [
            {
              id: "project-team",
              name: "Project Teams",
              role: "Coordinators & Analysts",
              department: "Projects",
            },
          ],
        },
      ],
    },
    {
      id: "safety-director",
      name: "James Mitchell",
      role: "Director of Safety",
      image: "/team/safety-director.jpg",
      children: [
        {
          id: "field-supervisor",
          name: "Michael Roberts",
          role: "Field Supervisor",
          image: "/team/field-supervisor.jpg",
          department: "Field Operations",
          children: [
            {
              id: "safety-consultants",
              name: "Safety Consultants",
              role: "SMEs & Specialists",
              department: "Consulting",
            },
          ],
        },
        {
          id: "compliance",
          name: "Compliance Team",
          role: "Auditors & Inspectors",
          department: "Compliance",
        },
      ],
    },
    {
      id: "admin",
      name: "Administrative",
      role: "Support Services",
      department: "Administration",
      children: [
        {
          id: "hr",
          name: "Human Resources",
          role: "HR Team",
          department: "HR",
        },
        {
          id: "finance",
          name: "Finance",
          role: "Accounting Team",
          department: "Finance",
        },
      ],
    },
  ],
}

function OrgCard({ node, isExpanded, onToggle, level = 0 }: { 
  node: OrgNode
  isExpanded: boolean
  onToggle: () => void
  level?: number
}) {
  const hasChildren = node.children && node.children.length > 0

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "bg-card rounded-xl shadow-sm border border-border overflow-hidden",
        "hover:shadow-md transition-shadow",
        level === 0 && "ring-2 ring-accent"
      )}
    >
      <div 
        className={cn(
          "p-4 flex items-center gap-4 cursor-pointer",
          hasChildren && "hover:bg-secondary/50"
        )}
        onClick={hasChildren ? onToggle : undefined}
      >
        {node.image ? (
          <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 relative">
            <Image
              src={node.image}
              alt={node.name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shrink-0">
            <Users className="w-6 h-6 text-muted-foreground" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground truncate">{node.name}</h4>
          <p className="text-sm text-accent truncate">{node.role}</p>
          {node.department && (
            <p className="text-xs text-muted-foreground">{node.department}</p>
          )}
        </div>
        {hasChildren && (
          <div className="shrink-0">
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

function OrgBranch({ node, level = 0 }: { node: OrgNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(level < 2)
  const hasChildren = node.children && node.children.length > 0

  return (
    <div className="flex flex-col items-center">
      <OrgCard 
        node={node} 
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
        level={level}
      />
      
      {hasChildren && isExpanded && (
        <>
          <div className="w-0.5 h-8 bg-border" />
          <div className="flex items-start gap-4 relative">
            {/* Horizontal connector */}
            {node.children!.length > 1 && (
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 bg-border"
                style={{ width: `calc(100% - 200px)` }}
              />
            )}
            
            <div className="flex flex-wrap justify-center gap-4">
              {node.children!.map((child, index) => (
                <div key={child.id} className="flex flex-col items-center">
                  {node.children!.length > 1 && (
                    <div className="w-0.5 h-4 bg-border" />
                  )}
                  <OrgBranch node={child} level={level + 1} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// Mobile-friendly list view
function OrgList({ node, level = 0 }: { node: OrgNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(level < 2)
  const hasChildren = node.children && node.children.length > 0

  return (
    <div className={cn("relative", level > 0 && "ml-4 md:ml-8")}>
      {level > 0 && (
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border -translate-x-4" />
      )}
      
      <div className="relative">
        {level > 0 && (
          <div className="absolute left-0 top-1/2 w-3 h-0.5 bg-border -translate-x-4 -translate-y-0.5" />
        )}
        <OrgCard 
          node={node} 
          isExpanded={isExpanded}
          onToggle={() => setIsExpanded(!isExpanded)}
          level={level}
        />
      </div>
      
      {hasChildren && isExpanded && (
        <div className="mt-4 space-y-4">
          {node.children!.map((child) => (
            <OrgList key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export function OrganizationalChart() {
  return (
    <div className="w-full">
      {/* Desktop Tree View */}
      <div className="hidden lg:block overflow-x-auto pb-8">
        <div className="min-w-max flex justify-center">
          <OrgBranch node={orgData} />
        </div>
      </div>
      
      {/* Mobile/Tablet List View */}
      <div className="lg:hidden">
        <OrgList node={orgData} />
      </div>
      
      {/* Legend */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-accent" />
          <span className="text-muted-foreground">Executive Leadership</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-secondary" />
          <span className="text-muted-foreground">Department/Team</span>
        </div>
        <div className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Click to expand</span>
        </div>
      </div>
    </div>
  )
}
