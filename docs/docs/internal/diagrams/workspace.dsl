workspace "Enlist - provisional architecture baseline" "Initial C4 workspace based only on the verified repository identity; implementation architecture is not established." {

    model {
        // Verified baseline: the repository is named "enlist"; README.md is empty
        // and the docs tree contains no architecture documentation.
        // This placeholder does not establish that the repository maps 1:1 to a
        // deployed system. Its purpose, boundary, actors, runtime, and interfaces
        // remain unverified.
        enlist = softwareSystem "Enlist (provisional boundary)" "Placeholder derived solely from the repository name. The actual system boundary and behavior are unverified." {
            tags "Provisional" "Scope unverified"
        }

        // No people, containers, components, external systems, deployments, or
        // relationships are modeled because none are evidenced by available docs.
        // Their omission does not imply they do not exist.
    }

    views {
        systemContext enlist "SystemContext" "Provisional system context: only the repository-named placeholder is known; no interactions are asserted." {
            include enlist
            autoLayout lr
        }

        styles {
            element "Software System" {
                background #1168BD
                color #ffffff
            }
            element "Provisional" {
                background #6B7280
                color #ffffff
                border dashed
            }
        }
    }
}
