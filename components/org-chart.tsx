"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, Users, Star, Shield } from "lucide-react"
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
  const isCLevel = level <= 1 && node.image

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "bg-[#0f2140] border-2 overflow-hidden transition-all relative",
        isExecutive ? "border-[#d4a955]" : isCLevel ? "border-[#c41e3a]" : "border-[#1e3a5f] hover:border-[#3b82f6]",
        hasChildren && "cursor-pointer"
      )}
      onClick={hasChildren ? onToggle : undefined}
    >
      {/* Patriotic stripe accent for executives */}
      {isExecutive && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c41e3a] via-[#f0f4f8] to-[#3b82f6]" />
      )}
      
      <div className="p-4 flex items-center gap-4">
        {node.image ? (
          <div className="relative">
            <div className="w-14 h-14 relative border-2 border-[#1e3a5f] overflow-hidden shrink-0">
              <Image
                src={node.image}
                alt={node.name}
                fill
                className="object-cover"
              />
            </div>
            {/* USA badge for executives */}
            {isCLevel && (
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#0a1628] border border-[#d4a955] flex items-center justify-center">
                <span className="text-[5px] font-bold text-[#d4a955]">USA</span>
              </div>
            )}
          </div>
        ) : (
          <div className="w-14 h-14 border-2 border-[#1e3a5f] flex items-center justify-center shrink-0 bg-[#0a1628]">
            <Users className="w-6 h-6 text-[#8ba3c7]" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-[#f0f4f8] truncate">{node.name}</h4>
            {isExecutive && <Star className="w-3 h-3 fill-[#d4a955] text-[#d4a955] shrink-0" />}
          </div>
          <p className="text-[10px] text-[#c41e3a] tracking-wider truncate font-semibold">{node.role}</p>
          {node.department && (
            <span className="inline-block mt-1 text-[9px] font-bold text-[#d4a955] bg-[#0a1628] border border-[#d4a955]/30 px-2 py-0.5 tracking-wider">
              {node.department}
            </span>
          )}
        </div>
        {hasChildren && (
          <div className="shrink-0 w-8 h-8 border border-[#1e3a5f] flex items-center justify-center bg-[#0a1628]">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-[#c41e3a]" />
            ) : (
              <ChevronRight className="w-4 h-4 text-[#8ba3c7]" />
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
            <div className="w-px h-8 bg-[#1e3a5f]" />
            <div className="flex items-start gap-4 relative">
              {node.children!.length > 1 && (
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-[#1e3a5f]"
                  style={{ width: `calc(100% - 180px)` }}
                />
              )}
              
              <div className="flex flex-wrap justify-center gap-4">
                {node.children!.map((child) => (
                  <div key={child.id} className="flex flex-col items-center">
                    {node.children!.length > 1 && (
                      <div className="w-px h-4 bg-[#1e3a5f]" />
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
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[#1e3a5f] -translate-x-3" />
      )}
      
      <div className="relative">
        {level > 0 && (
          <div className="absolute left-0 top-1/2 w-2 h-px bg-[#1e3a5f] -translate-x-3 -translate-y-px" />
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
      <div className="mt-16 p-6 border-2 border-[#1e3a5f] bg-[#0f2140]">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-4 h-4 text-[#d4a955]" />
          <p className="text-xs font-semibold text-[#d4a955] tracking-widest">LEGEND</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 border-2 border-[#d4a955] bg-[#d4a955]/10" />
            <span className="text-xs text-[#8ba3c7]">CEO / Executive</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 border-2 border-[#c41e3a] bg-[#c41e3a]/10" />
            <span className="text-xs text-[#8ba3c7]">C-Level Leadership</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 border-2 border-[#1e3a5f] bg-[#0a1628]" />
            <span className="text-xs text-[#8ba3c7]">Department / Team</span>
          </div>
          <div className="flex items-center gap-3">
            <ChevronRight className="w-4 h-4 text-[#8ba3c7]" />
            <span className="text-xs text-[#8ba3c7]">Click to expand</span>
          </div>
        </div>
        
        {/* Patriotic footer */}
        <div className="mt-6 pt-4 border-t border-[#1e3a5f] flex items-center gap-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-[#d4a955] text-[#d4a955]" />
            ))}
          </div>
          <span className="text-xs text-[#8ba3c7]">American Owned & Operated</span>
        </div>
      </div>
    </div>
  )
}
