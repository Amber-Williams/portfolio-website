export interface CaseStudyProps {
  path: string
  order: number
  template: string
  title: string
  subtitle: string
  preview_image: string
  tech_stack: string
  content: Array<string>
}

export interface CaseStudyListProps {
  allCaseStudies: CaseStudyProps[]
}
