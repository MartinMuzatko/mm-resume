import { ReactNode } from 'react'

export type Skill = {
	name: string
	level: number
	years: number
}

export type SkillGroup = {
	group: string
	skills: Skill[]
}

export type SoftSkillGroup = {
	group: string
	skills: Pick<Skill, 'name'>[]
}

export type Company = {
	name: string
	timespan: string
	objective: ReactNode
	assignments: Assignment[]
}

export type Assignment = {
	customer: string
	timespan: string
	role: string
	objective: ReactNode
	tasks: ReactNode[]
	tools: ReactNode[]
	programming: ReactNode[]
}
