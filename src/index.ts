import { Cabanga } from "./structures/Cabanga";

const refreshT = "shit I pushed that well I mean it's not active indefinitely"

const session = new Cabanga("", 0, refreshT, "https://login.scolares.be/auth/realms/horizon/protocol/openid-connect/token", "43691536", "ESNDNAMUR")

let assignments = await session.getAssignments("2026-10-01", "2026-11-30")

console.log(assignments)

session.setAssignmentData(assignments[0], true)

assignments = await session.getAssignments("2026-10-01", "2026-11-30")

console.log(assignments[0].done)

session.setAssignmentData(assignments[0], false)

assignments = await session.getAssignments("2026-10-01", "2026-11-30")

console.log(assignments[0].done)
