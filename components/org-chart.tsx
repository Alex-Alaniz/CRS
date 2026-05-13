"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
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
  role: "FOUNDER & CEO",
  image: "/team/ceo.jpg",
  children: [
    {
      id: "coo",
      name: "Maria Rodriguez",
      role: "CHIEF OPERATIONS OFFICER",
      image: "/team/coo.jpg",
      children: [
        {
          id: "ops-manager",
          name: "David Thompson",
          role: "OPERATIONS MANAGER",
          image: "/team/operations-manager.jpg",
          department: "OPS",
          children: [
            {
              id: "field-team",
              name: "Field Teams",
              role: "SAFETY PROFESSIONALS",
              department: "FIELD",
            },
          ],
        },
        {
          id: "project-manager",
          name: "Sarah Chen",
          role: "PROJECT MANAGER",
          image: "/team/project-manager.jpg",
          department: "PROJ",
          children: [
            {
              id: "project-team",
              name: "Project Teams",
              role: "COORDINATORS",
              department: "PROJ",
            },
          ],
        },
      ],
    },
    {
      id: "safety-director",
      name: "James Mitchell",
      role: "DIRECTOR OF SAFETY",
      image: "/team/safety-director.jpg",
      children: [
        {
          id: "field-supervisor",
          name: "Michael Roberts",
          role: "FIELD SUPERVISOR",
          image: "/team/field-supervisor.jpg",
          department: "FIELD",
          children: [
            {
              id: "safety-consultants",
              name: "Safety Consultants",
              role: "SMEs & SPECIALISTS",
              department: "CONSULT",
            },
          ],
        },
        {
          id: "compliance",
          name: "Compliance Team",
          role: "AUDITORS & INSPECTORS",
          department: "COMPL",
        },
      ],
    },
    {
      id: "admin",
      name: "Administrative",
      role: "SUPPORT SERVICES",
      department: "ADMIN",
      children: [
        {
          id: "hr",
          name: "Human Resources",
          role: "HR TEAM",
          department: "HR",
        },
        {
          id: "finance",
          name: "Finance",
          role: "ACCOUNTING",
          department: "FIN",
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
  const isExecutive = level === 0

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "bg-card border overflow-hidden transition-all",
        isExecutive ? "border-accent" : "border-border hover:border-accent/50",
        hasChildren && "cursor-pointer"
      )}
      onClick={hasChildren ? onToggle : undefined}
    >
      <div className="p-4 flex items-center gap-4">
        {node.image ? (
          <div className="w-12 h-12 relative border border-border overflow-hidden shrink-0">
            <Image
              src={node.image}
              alt={node.name}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ) : (
          <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0 bg-secondary">
            <Users className="w-5 h-5 text-muted-foreground" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4 className="font-serif font-bold text-foreground truncate">{node.name}</h4>
          <p className="text-[10px] font-mono text-accent tracking-wider truncate">{node.role}</p>
          {node.department && (
            <span className="inline-block mt-1 text-[9px] font-mono text-muted-foreground bg-secondary px-1.5 py-0.5">
              {node.department}
            </span>
          )}
        </div>
        {hasChildren && (
          <div className="shrink-0 w-6 h-6 border border-border flex items-center justify-center">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-accent" />
            ) : (
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
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
      
      <AnimatePresence>
        {hasChildren && isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col items-center"
          >
            <div className="w-px h-8 bg-border" />
            <div className="flex items-start gap-4 relative">
              {node.children!.length > 1 && (
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-border"
                  style={{ width: `calc(100% - 180px)` }}
                />
              )}
              
              <div className="flex flex-wrap justify-center gap-4">
                {node.children!.map((child) => (
                  <div key={child.id} className="flex flex-col items-center">
                    {node.children!.length > 1 && (
                      <div className="w-px h-4 bg-border" />
                    )}
                    <OrgBranch node={child} level={level + 1} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function OrgList({ node, level = 0 }: { node: OrgNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(level < 2)
  const hasChildren = node.children && node.children.length > 0

  return (
    <div className={cn("relative", level > 0 && "ml-6")}>
      {level > 0 && (
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border -translate-x-3" />
      )}
      
      <div className="relative">
        {level > 0 && (
          <div className="absolute left-0 top-1/2 w-2 h-px bg-border -translate-x-3 -translate-y-px" />
        )}
        <OrgCard 
          node={node} 
          isExpanded={isExpanded}
          onToggle={() => setIsExpanded(!isExpanded)}
          level={level}
        />
      </div>
      
      <AnimatePresence>
        {hasChildren && isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-4"
          >
            {node.children!.map((child) => (
              <OrgList key={child.id} node={child} level={level + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
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
      <div className="mt-16 p-6 border border-border">
        <p className="text-xs font-mono text-accent tracking-wider mb-4">LEGEND</p>
        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 border border-accent bg-accent/20" />
            <span className="text-xs text-muted-foreground">Executive Leadership</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 border border-border bg-secondary" />
            <span className="text-xs text-muted-foreground">Department / Team</span>
          </div>
          <div className="flex items-center gap-3">
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Click to expand</span>
          </div>
        </div>
      </div>
    </div>
  )
}
