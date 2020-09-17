export interface CaseStudyProps {
  path: string
  order: number
  template: string
  hero_image: string
  title: string
  tags: Array<string>
  subtitle: string
  preview_image: string
  tech_stack: string
  content: Array<string>
}

export interface CaseStudyListProps {
  allCaseStudies: CaseStudyProps[]
}
