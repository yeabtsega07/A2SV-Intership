// types.ts

export interface Opportunity {
    id: string;
    title: string;
    description: string;
    responsibilities: string;
    requirements: string | null; 
    idealCandidate: string;
    categories: string[];
    opType: string;
    startDate: string;
    endDate: string;
    deadline: string;
    location: string[];
    requiredSkills: string[];
    whenAndWhere: string;
    orgID: string;
    datePosted: string;
    status: string;
    applicantsCount: number;
    viewsCount: number;
    orgName: string;
    logoUrl: string ; 
    isBookmarked: boolean;
    isRolling: boolean;
    questions: string[] | null; 
    perksAndBenefits:string[] | null; 
    createdAt: string;
    updatedAt: string;
    orgEmail: string;
  }
  
  export interface ApiResponse {
    data: Opportunity[];
    success: boolean;
    message: string;
    errors: any;
    count: number;
  }

  export interface ApiResponseByID {
    data: Opportunity;
    success: boolean;
    message: string;
    errors: any;
    count: number;
  }
  