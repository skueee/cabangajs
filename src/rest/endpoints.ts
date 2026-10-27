export const BASE_URL = () => "https://api.scolares.be/cabanga/api/"

// Common things
export const SCHOOL = (schoolId: string) => "schools/" + schoolId + "/"
export const USER = (userId: string) => "students/" + userId + "/"

// Absences related
export const USER_ABSENCES = (schoolId: string, userId: string) => SCHOOL(schoolId) + USER(userId) + "absences"
export const USER_LEGAL_ABSENCES = (schoolId: string, userId: string) => SCHOOL(schoolId) + USER(userId) + "legalAbsences"

// Diary related
export const USER_DIARY = (schoolId: string, userId: string) => SCHOOL(schoolId) + USER(userId) + "diary"

// School infos related
export const SCHOOL_SCHEDULES = (schoolId: string, year: string) => SCHOOL(schoolId) + "schedules/" + year
export const SCHOOL_PUBLIC_MESSAGE = (schoolId: string) => SCHOOL(schoolId) + "publicMessage"
export const SCHOOL_SETTINGS = (schoolId: string) => SCHOOL(schoolId) + "settings"
export const SCHOOL_HOLIDAYS = (schoolId: string) => SCHOOL(schoolId) + "holidays"

// Agenda related
export const SCHOOL_ACTIVITIES = (schoolId: string) => SCHOOL(schoolId) + "agenda/activities"

// User related
export const USER_ATTRIBUTIONS = (schoolId: string, userId: string) => SCHOOL(schoolId) + USER(userId) + "attributions"
export const USER_PROFILE = () => "profiles"

// Grades related
export const USER_EVALUTATIONS = (schoolId: string, userId: string) => SCHOOL(schoolId) + USER(userId) + "evalutations"

// Remarks related
export const USER_REMARKS = (schoolId: string, userId: string) => SCHOOL(schoolId) + USER(userId) + "remarks"

// Detentions related
export const USER_DETENTIONS = (schoolId: string, userId: string) => SCHOOL(schoolId) + USER(userId) + "detentions"

// Documents related
export const SCHOOL_DOCUMENTS = (schoolId: string) => SCHOOL(schoolId) + "sharedDocuments"

// Reports related
export const USER_REPORTS = (schoolId: string, userId: string, year: string) => SCHOOL(schoolId) + USER(userId) + "schoolReports/" + year
export const SCHOOL_REPORTS_TYPES = (schoolId: string) => SCHOOL(schoolId) + "schoolReportTypes"
export const SCHOOL_REPORTS_TYPES_TO_CLASSES_ASSIGNMENT = (schoolId: string) => SCHOOL(schoolId) + "schoolReportTypesToClassesAssignment"
export const USER_REPORTS_SNAPSHOTS = (schoolId: string, userId: string) => SCHOOL(schoolId) + USER(userId) + "schoolReportSnapshots"
export const USER_END_OF_YEAR_DECISIONS = (schoolId: string, userId: string) => SCHOOL(schoolId) + USER(userId) + "endOfYearDecision"
