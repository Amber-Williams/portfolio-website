export interface CaseStudy {
  path: string
  order: number
  template: string
  test: string
}

export interface CaseStudyList {
  allCaseStudies: CaseStudy[]
}
