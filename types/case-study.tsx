export interface CaseStudyProps {
  path: string
  order: number
  template: string
  test: string
}

export interface CaseStudyListProps {
  allCaseStudies: CaseStudyProps[]
}
