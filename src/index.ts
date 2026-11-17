import { Cabanga } from "./structures/Cabanga";

const refreshT = "eyJhbGciOiJIUzUxMiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2Nzc2MTM0MC00YmQxLTRkZWQtYWY4Mi00ZTg4NzU5NjNmZDIifQ.eyJleHAiOjE3OTU1NDEzMDYsImlhdCI6MTc5NDkzNjUwNiwianRpIjoiZGJjZmEwMDEtMTE0MS01OWI0LTY1MDUtZDMwMmM4ZmI1YTc4IiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zY29sYXJlcy5iZS9hdXRoL3JlYWxtcy9ob3Jpem9uIiwiYXVkIjoiaHR0cHM6Ly9sb2dpbi5zY29sYXJlcy5iZS9hdXRoL3JlYWxtcy9ob3Jpem9uIiwic3ViIjoiYjU3NTM3YzctYjFhOC00NzdiLThiZmUtYWYxMmY2YzI0OGVmIiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImNhYmFuZ2EtZnJvbnRlbmQiLCJzaWQiOiJzUmlLX2JUTHpRUFFPdGlZaG1JWDl5S0UiLCJzY29wZSI6Im9wZW5pZCB3ZWItb3JpZ2lucyBlbWFpbCByb2xlcyBwcm9maWxlIGJhc2ljIiwiYXVkX3giOlsicmVmZXJlbmNlLWRhdGEtYXBpIiwic3R1ZGVudC1hcGkiLCJhY2NvdW50IiwiY2FiYW5nYS1hcGkiXSwicHJvdiI6ImRlZmF1bHQifQ.u1oWULNtKOBOYhAJu4i3N1j-k7P6smWAJzLe_ygW65se2VP5qj7GqBzRhcn0Ff8lNOTHhjO6vRKs83LvTjF50A"

const session = new Cabanga("", 0, refreshT, "https://login.scolares.be/auth/realms/horizon/protocol/openid-connect/token", "43691536", "ESNDNAMUR")

let assignments = await session.getAssignments("2026-10-01", "2026-11-30")

console.log(assignments)

session.setAssignmentData(assignments[0], true)

assignments = await session.getAssignments("2026-10-01", "2026-11-30")

console.log(assignments[0].done)

session.setAssignmentData(assignments[0], false)

assignments = await session.getAssignments("2026-10-01", "2026-11-30")

console.log(assignments[0].done)
