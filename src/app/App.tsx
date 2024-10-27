//@ts-check

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { IItemList, ItemList } from "entity/Item";
import * as cls from "./App.module.scss";

const testData = {
    total_count: 2353791,
    incomplete_results: false,
    items: [
        {
            id: 52776497,
            node_id: "MDEwOlJlcG9zaXRvcnk1Mjc3NjQ5Nw==",
            name: "JavaScript_2016_01",
            full_name: "EverestTraining/JavaScript_2016_01",
            private: false,
            owner: {
                login: "EverestTraining",
                id: 8589013,
                node_id: "MDQ6VXNlcjg1ODkwMTM=",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/8589013?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/EverestTraining",
                html_url: "https://github.com/EverestTraining",
                followers_url:
                    "https://api.github.com/users/EverestTraining/followers",
                following_url:
                    "https://api.github.com/users/EverestTraining/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/EverestTraining/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/EverestTraining/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/EverestTraining/subscriptions",
                organizations_url:
                    "https://api.github.com/users/EverestTraining/orgs",
                repos_url: "https://api.github.com/users/EverestTraining/repos",
                events_url:
                    "https://api.github.com/users/EverestTraining/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/EverestTraining/received_events",
                type: "User",
                user_view_type: "public",
                site_admin: false,
            },
            html_url: "https://github.com/EverestTraining/JavaScript_2016_01",
            description: "珠峰培训2016年全栈前端开发第一期",
            fork: false,
            url: "https://api.github.com/repos/EverestTraining/JavaScript_2016_01",
            forks_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/forks",
            keys_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/teams",
            hooks_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/hooks",
            issue_events_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/events",
            assignees_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/tags",
            blobs_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/languages",
            stargazers_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/stargazers",
            contributors_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/contributors",
            subscribers_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/subscribers",
            subscription_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/subscription",
            commits_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/merges",
            archive_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/downloads",
            issues_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/labels{/name}",
            releases_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/EverestTraining/JavaScript_2016_01/deployments",
            created_at: "2016-02-29T08:40:08Z",
            updated_at: "2018-09-15T11:31:19Z",
            pushed_at: "2016-02-29T08:52:01Z",
            git_url: "git://github.com/EverestTraining/JavaScript_2016_01.git",
            ssh_url: "git@github.com:EverestTraining/JavaScript_2016_01.git",
            clone_url:
                "https://github.com/EverestTraining/JavaScript_2016_01.git",
            svn_url: "https://github.com/EverestTraining/JavaScript_2016_01",

            size: 1,
            stargazers_count: 0,
            watchers_count: 0,
            language: null,
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 127,

            archived: false,
            disabled: false,
            open_issues_count: 0,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 127,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 105159292,
            node_id: "MDEwOlJlcG9zaXRvcnkxMDUxNTkyOTI=",
            name: "javascript-task-1",
            full_name: "urfu-2017/javascript-task-1",
            private: false,
            owner: {
                login: "urfu-2017",
                id: 31925391,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjMxOTI1Mzkx",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/31925391?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/urfu-2017",
                html_url: "https://github.com/urfu-2017",
                followers_url:
                    "https://api.github.com/users/urfu-2017/followers",
                following_url:
                    "https://api.github.com/users/urfu-2017/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/urfu-2017/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/urfu-2017/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/urfu-2017/subscriptions",
                organizations_url:
                    "https://api.github.com/users/urfu-2017/orgs",
                repos_url: "https://api.github.com/users/urfu-2017/repos",
                events_url:
                    "https://api.github.com/users/urfu-2017/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/urfu-2017/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url: "https://github.com/urfu-2017/javascript-task-1",
            description: "Задача «XXL»",
            fork: false,
            url: "https://api.github.com/repos/urfu-2017/javascript-task-1",
            forks_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/forks",
            keys_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/teams",
            hooks_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/hooks",
            issue_events_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/events",
            assignees_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/tags",
            blobs_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/languages",
            stargazers_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/stargazers",
            contributors_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/contributors",
            subscribers_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/subscribers",
            subscription_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/subscription",
            commits_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/merges",
            archive_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/downloads",
            issues_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/labels{/name}",
            releases_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-1/deployments",
            created_at: "2017-09-28T14:33:58Z",
            updated_at: "2020-05-24T16:44:51Z",
            pushed_at: "2018-04-22T04:23:57Z",
            git_url: "git://github.com/urfu-2017/javascript-task-1.git",
            ssh_url: "git@github.com:urfu-2017/javascript-task-1.git",
            clone_url: "https://github.com/urfu-2017/javascript-task-1.git",
            svn_url: "https://github.com/urfu-2017/javascript-task-1",

            size: 16,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 106,

            archived: false,
            disabled: false,
            open_issues_count: 3,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,
            topics: ["javascript", "tasks"],
            visibility: "public",
            forks: 106,
            open_issues: 3,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 64949826,
            node_id: "MDEwOlJlcG9zaXRvcnk2NDk0OTgyNg==",
            name: "javascript-fix-this-v-000",
            full_name: "learn-co-students/javascript-fix-this-v-000",
            private: false,
            owner: {
                login: "learn-co-students",
                id: 8825476,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjg4MjU0NzY=",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/8825476?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/learn-co-students",
                html_url: "https://github.com/learn-co-students",
                followers_url:
                    "https://api.github.com/users/learn-co-students/followers",
                following_url:
                    "https://api.github.com/users/learn-co-students/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/learn-co-students/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/learn-co-students/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/learn-co-students/subscriptions",
                organizations_url:
                    "https://api.github.com/users/learn-co-students/orgs",
                repos_url:
                    "https://api.github.com/users/learn-co-students/repos",
                events_url:
                    "https://api.github.com/users/learn-co-students/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/learn-co-students/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/learn-co-students/javascript-fix-this-v-000",

            fork: false,
            url: "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000",
            forks_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/forks",
            keys_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/teams",
            hooks_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/hooks",
            issue_events_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/events",
            assignees_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/tags",
            blobs_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/languages",
            stargazers_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/stargazers",
            contributors_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/contributors",
            subscribers_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/subscribers",
            subscription_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/subscription",
            commits_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/merges",
            archive_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/downloads",
            issues_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/labels{/name}",
            releases_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/learn-co-students/javascript-fix-this-v-000/deployments",
            created_at: "2016-08-04T16:21:48Z",
            updated_at: "2018-10-04T06:35:48Z",
            pushed_at: "2018-10-04T06:35:32Z",
            git_url:
                "git://github.com/learn-co-students/javascript-fix-this-v-000.git",
            ssh_url:
                "git@github.com:learn-co-students/javascript-fix-this-v-000.git",
            clone_url:
                "https://github.com/learn-co-students/javascript-fix-this-v-000.git",
            svn_url:
                "https://github.com/learn-co-students/javascript-fix-this-v-000",

            size: 132,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            has_discussions: false,
            forks_count: 147,
            archived: false,
            disabled: false,
            open_issues_count: 157,
            license: {
                key: "other",
                name: "Other",
                spdx_id: "NOASSERTION",
                node_id: "MDc6TGljZW5zZTA=",
            },
            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,
            visibility: "public",
            forks: 147,
            open_issues: 157,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 538962005,
            node_id: "R_kgDOIB_oVQ",
            name: "javascript-fungus-fighter",
            full_name: "PrimeAcademy/javascript-fungus-fighter",
            private: false,
            owner: {
                login: "PrimeAcademy",
                id: 9360728,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjkzNjA3Mjg=",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/9360728?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/PrimeAcademy",
                html_url: "https://github.com/PrimeAcademy",
                followers_url:
                    "https://api.github.com/users/PrimeAcademy/followers",
                following_url:
                    "https://api.github.com/users/PrimeAcademy/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/PrimeAcademy/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/PrimeAcademy/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/PrimeAcademy/subscriptions",
                organizations_url:
                    "https://api.github.com/users/PrimeAcademy/orgs",
                repos_url: "https://api.github.com/users/PrimeAcademy/repos",
                events_url:
                    "https://api.github.com/users/PrimeAcademy/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/PrimeAcademy/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/PrimeAcademy/javascript-fungus-fighter",

            fork: false,
            url: "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter",
            forks_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/forks",
            keys_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/teams",
            hooks_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/hooks",
            issue_events_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/events",
            assignees_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/tags",
            blobs_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/languages",
            stargazers_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/stargazers",
            contributors_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/contributors",
            subscribers_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/subscribers",
            subscription_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/subscription",
            commits_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/merges",
            archive_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/downloads",
            issues_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/labels{/name}",
            releases_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/PrimeAcademy/javascript-fungus-fighter/deployments",
            created_at: "2022-09-20T11:49:43Z",
            updated_at: "2023-10-26T19:33:24Z",
            pushed_at: "2024-05-07T10:43:57Z",
            git_url:
                "git://github.com/PrimeAcademy/javascript-fungus-fighter.git",
            ssh_url:
                "git@github.com:PrimeAcademy/javascript-fungus-fighter.git",
            clone_url:
                "https://github.com/PrimeAcademy/javascript-fungus-fighter.git",
            svn_url:
                "https://github.com/PrimeAcademy/javascript-fungus-fighter",

            size: 4137,
            stargazers_count: 0,
            watchers_count: 0,
            language: "CSS",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 146,

            archived: false,
            disabled: false,
            open_issues_count: 0,

            allow_forking: true,
            is_template: true,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 146,
            open_issues: 0,
            watchers: 0,
            default_branch: "main",
            score: 1.0,
        },
        {
            id: 64949853,
            node_id: "MDEwOlJlcG9zaXRvcnk2NDk0OTg1Mw==",
            name: "javascript-fetch-lab-v-000",
            full_name: "learn-co-students/javascript-fetch-lab-v-000",
            private: false,
            owner: {
                login: "learn-co-students",
                id: 8825476,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjg4MjU0NzY=",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/8825476?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/learn-co-students",
                html_url: "https://github.com/learn-co-students",
                followers_url:
                    "https://api.github.com/users/learn-co-students/followers",
                following_url:
                    "https://api.github.com/users/learn-co-students/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/learn-co-students/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/learn-co-students/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/learn-co-students/subscriptions",
                organizations_url:
                    "https://api.github.com/users/learn-co-students/orgs",
                repos_url:
                    "https://api.github.com/users/learn-co-students/repos",
                events_url:
                    "https://api.github.com/users/learn-co-students/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/learn-co-students/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/learn-co-students/javascript-fetch-lab-v-000",

            fork: false,
            url: "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000",
            forks_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/forks",
            keys_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/teams",
            hooks_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/hooks",
            issue_events_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/events",
            assignees_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/tags",
            blobs_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/languages",
            stargazers_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/stargazers",
            contributors_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/contributors",
            subscribers_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/subscribers",
            subscription_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/subscription",
            commits_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/merges",
            archive_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/downloads",
            issues_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/labels{/name}",
            releases_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/learn-co-students/javascript-fetch-lab-v-000/deployments",
            created_at: "2016-08-04T16:22:00Z",
            updated_at: "2019-02-21T21:29:16Z",
            pushed_at: "2019-02-21T21:29:01Z",
            git_url:
                "git://github.com/learn-co-students/javascript-fetch-lab-v-000.git",
            ssh_url:
                "git@github.com:learn-co-students/javascript-fetch-lab-v-000.git",
            clone_url:
                "https://github.com/learn-co-students/javascript-fetch-lab-v-000.git",
            svn_url:
                "https://github.com/learn-co-students/javascript-fetch-lab-v-000",

            size: 89,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            has_discussions: false,
            forks_count: 143,

            archived: false,
            disabled: false,
            open_issues_count: 133,
            license: {
                key: "other",
                name: "Other",
                spdx_id: "NOASSERTION",

                node_id: "MDc6TGljZW5zZTA=",
            },
            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 143,
            open_issues: 133,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 107454408,
            node_id: "MDEwOlJlcG9zaXRvcnkxMDc0NTQ0MDg=",
            name: "DOM-JavaScript-mini",
            full_name: "bloominstituteoftechnology/DOM-JavaScript-mini",
            private: false,
            owner: {
                login: "bloominstituteoftechnology",
                id: 24780114,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjI0NzgwMTE0",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/24780114?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/bloominstituteoftechnology",
                html_url: "https://github.com/bloominstituteoftechnology",
                followers_url:
                    "https://api.github.com/users/bloominstituteoftechnology/followers",
                following_url:
                    "https://api.github.com/users/bloominstituteoftechnology/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/bloominstituteoftechnology/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/bloominstituteoftechnology/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/bloominstituteoftechnology/subscriptions",
                organizations_url:
                    "https://api.github.com/users/bloominstituteoftechnology/orgs",
                repos_url:
                    "https://api.github.com/users/bloominstituteoftechnology/repos",
                events_url:
                    "https://api.github.com/users/bloominstituteoftechnology/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/bloominstituteoftechnology/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/bloominstituteoftechnology/DOM-JavaScript-mini",

            fork: false,
            url: "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini",
            forks_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/forks",
            keys_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/teams",
            hooks_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/hooks",
            issue_events_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/events",
            assignees_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/tags",
            blobs_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/languages",
            stargazers_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/stargazers",
            contributors_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/contributors",
            subscribers_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/subscribers",
            subscription_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/subscription",
            commits_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/merges",
            archive_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/downloads",
            issues_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/labels{/name}",
            releases_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/bloominstituteoftechnology/DOM-JavaScript-mini/deployments",
            created_at: "2017-10-18T19:37:57Z",
            updated_at: "2017-10-18T19:40:00Z",
            pushed_at: "2018-02-08T08:21:38Z",
            git_url:
                "git://github.com/bloominstituteoftechnology/DOM-JavaScript-mini.git",
            ssh_url:
                "git@github.com:bloominstituteoftechnology/DOM-JavaScript-mini.git",
            clone_url:
                "https://github.com/bloominstituteoftechnology/DOM-JavaScript-mini.git",
            svn_url:
                "https://github.com/bloominstituteoftechnology/DOM-JavaScript-mini",

            size: 4,
            stargazers_count: 0,
            watchers_count: 0,
            language: "HTML",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 117,

            archived: false,
            disabled: false,
            open_issues_count: 82,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 117,
            open_issues: 82,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 105899495,
            node_id: "MDEwOlJlcG9zaXRvcnkxMDU4OTk0OTU=",
            name: "javascript-task-2",
            full_name: "urfu-2017/javascript-task-2",
            private: false,
            owner: {
                login: "urfu-2017",
                id: 31925391,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjMxOTI1Mzkx",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/31925391?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/urfu-2017",
                html_url: "https://github.com/urfu-2017",
                followers_url:
                    "https://api.github.com/users/urfu-2017/followers",
                following_url:
                    "https://api.github.com/users/urfu-2017/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/urfu-2017/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/urfu-2017/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/urfu-2017/subscriptions",
                organizations_url:
                    "https://api.github.com/users/urfu-2017/orgs",
                repos_url: "https://api.github.com/users/urfu-2017/repos",
                events_url:
                    "https://api.github.com/users/urfu-2017/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/urfu-2017/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url: "https://github.com/urfu-2017/javascript-task-2",
            description: "Задача «Телефонная книга»",
            fork: false,
            url: "https://api.github.com/repos/urfu-2017/javascript-task-2",
            forks_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/forks",
            keys_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/teams",
            hooks_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/hooks",
            issue_events_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/events",
            assignees_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/tags",
            blobs_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/languages",
            stargazers_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/stargazers",
            contributors_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/contributors",
            subscribers_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/subscribers",
            subscription_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/subscription",
            commits_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/merges",
            archive_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/downloads",
            issues_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/labels{/name}",
            releases_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/urfu-2017/javascript-task-2/deployments",
            created_at: "2017-10-05T14:24:54Z",
            updated_at: "2018-05-27T12:51:28Z",
            pushed_at: "2017-10-28T20:50:26Z",
            git_url: "git://github.com/urfu-2017/javascript-task-2.git",
            ssh_url: "git@github.com:urfu-2017/javascript-task-2.git",
            clone_url: "https://github.com/urfu-2017/javascript-task-2.git",
            svn_url: "https://github.com/urfu-2017/javascript-task-2",

            size: 16,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 94,

            archived: false,
            disabled: false,
            open_issues_count: 14,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,
            topics: ["tasks"],
            visibility: "public",
            forks: 94,
            open_issues: 14,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 410845020,
            node_id: "R_kgDOGHz_XA",
            name: "javascript-refactoring-exercise",
            full_name: "techreturners/javascript-refactoring-exercise",
            private: false,
            owner: {
                login: "techreturners",
                id: 43854511,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjQzODU0NTEx",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/43854511?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/techreturners",
                html_url: "https://github.com/techreturners",
                followers_url:
                    "https://api.github.com/users/techreturners/followers",
                following_url:
                    "https://api.github.com/users/techreturners/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/techreturners/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/techreturners/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/techreturners/subscriptions",
                organizations_url:
                    "https://api.github.com/users/techreturners/orgs",
                repos_url: "https://api.github.com/users/techreturners/repos",
                events_url:
                    "https://api.github.com/users/techreturners/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/techreturners/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/techreturners/javascript-refactoring-exercise",
            description:
                "Exercise to practice refactoring old JavaScript to modern JavaScript / ES6",
            fork: false,
            url: "https://api.github.com/repos/techreturners/javascript-refactoring-exercise",
            forks_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/forks",
            keys_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/teams",
            hooks_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/hooks",
            issue_events_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/events",
            assignees_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/tags",
            blobs_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/languages",
            stargazers_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/stargazers",
            contributors_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/contributors",
            subscribers_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/subscribers",
            subscription_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/subscription",
            commits_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/merges",
            archive_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/downloads",
            issues_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/labels{/name}",
            releases_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/techreturners/javascript-refactoring-exercise/deployments",
            created_at: "2021-09-27T10:48:38Z",
            updated_at: "2021-10-11T12:39:01Z",
            pushed_at: "2023-10-25T12:15:43Z",
            git_url:
                "git://github.com/techreturners/javascript-refactoring-exercise.git",
            ssh_url:
                "git@github.com:techreturners/javascript-refactoring-exercise.git",
            clone_url:
                "https://github.com/techreturners/javascript-refactoring-exercise.git",
            svn_url:
                "https://github.com/techreturners/javascript-refactoring-exercise",
            size: 38,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 96,
            archived: false,
            disabled: false,
            open_issues_count: 1,
            license: {
                key: "gpl-3.0",
                name: "GNU General Public License v3.0",
                spdx_id: "GPL-3.0",
                url: "https://api.github.com/licenses/gpl-3.0",
                node_id: "MDc6TGljZW5zZTk=",
            },
            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,
            visibility: "public",
            forks: 96,
            open_issues: 1,
            watchers: 0,
            default_branch: "main",
            score: 1.0,
        },
        {
            id: 105008633,
            node_id: "MDEwOlJlcG9zaXRvcnkxMDUwMDg2MzM=",
            name: "eyes.sdk.javascript1",
            full_name: "astappiev/eyes.sdk.javascript1",
            private: false,
            owner: {
                login: "astappiev",
                id: 4512729,
                node_id: "MDQ6VXNlcjQ1MTI3Mjk=",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/4512729?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/astappiev",
                html_url: "https://github.com/astappiev",
                followers_url:
                    "https://api.github.com/users/astappiev/followers",
                following_url:
                    "https://api.github.com/users/astappiev/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/astappiev/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/astappiev/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/astappiev/subscriptions",
                organizations_url:
                    "https://api.github.com/users/astappiev/orgs",
                repos_url: "https://api.github.com/users/astappiev/repos",
                events_url:
                    "https://api.github.com/users/astappiev/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/astappiev/received_events",
                type: "User",
                user_view_type: "public",
                site_admin: false,
            },
            html_url: "https://github.com/astappiev/eyes.sdk.javascript1",
            description: "Applitools Eyes SDK for Javascript (Unified Repo) ",
            fork: false,
            url: "https://api.github.com/repos/astappiev/eyes.sdk.javascript1",
            forks_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/forks",
            keys_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/teams",
            hooks_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/hooks",
            issue_events_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/events",
            assignees_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/tags",
            blobs_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/languages",
            stargazers_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/stargazers",
            contributors_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/contributors",
            subscribers_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/subscribers",
            subscription_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/subscription",
            commits_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/merges",
            archive_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/downloads",
            issues_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/labels{/name}",
            releases_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/astappiev/eyes.sdk.javascript1/deployments",
            created_at: "2017-09-27T11:13:29Z",
            updated_at: "2024-03-20T09:59:56Z",
            pushed_at: "2019-11-30T17:01:14Z",
            git_url: "git://github.com/astappiev/eyes.sdk.javascript1.git",
            ssh_url: "git@github.com:astappiev/eyes.sdk.javascript1.git",
            clone_url: "https://github.com/astappiev/eyes.sdk.javascript1.git",
            svn_url: "https://github.com/astappiev/eyes.sdk.javascript1",

            size: 9864,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 42,

            archived: true,
            disabled: false,
            open_issues_count: 0,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 42,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 485020939,
            node_id: "R_kgDOHOjVCw",
            name: "javascript-carnival",
            full_name: "ptranny/javascript-carnival",
            private: false,
            owner: {
                login: "ptranny",
                id: 96764636,
                node_id: "U_kgDOBcSC3A",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/96764636?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/ptranny",
                html_url: "https://github.com/ptranny",
                followers_url: "https://api.github.com/users/ptranny/followers",
                following_url:
                    "https://api.github.com/users/ptranny/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/ptranny/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/ptranny/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/ptranny/subscriptions",
                organizations_url: "https://api.github.com/users/ptranny/orgs",
                repos_url: "https://api.github.com/users/ptranny/repos",
                events_url:
                    "https://api.github.com/users/ptranny/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/ptranny/received_events",
                type: "User",
                user_view_type: "public",
                site_admin: false,
            },
            html_url: "https://github.com/ptranny/javascript-carnival",

            fork: false,
            url: "https://api.github.com/repos/ptranny/javascript-carnival",
            forks_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/forks",
            keys_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/teams",
            hooks_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/hooks",
            issue_events_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/events",
            assignees_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/tags",
            blobs_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/languages",
            stargazers_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/stargazers",
            contributors_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/contributors",
            subscribers_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/subscribers",
            subscription_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/subscription",
            commits_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/merges",
            archive_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/downloads",
            issues_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/labels{/name}",
            releases_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/ptranny/javascript-carnival/deployments",
            created_at: "2022-04-24T12:26:37Z",
            updated_at: "2022-04-25T02:41:06Z",
            pushed_at: "2022-04-25T02:41:03Z",
            git_url: "git://github.com/ptranny/javascript-carnival.git",
            ssh_url: "git@github.com:ptranny/javascript-carnival.git",
            clone_url: "https://github.com/ptranny/javascript-carnival.git",
            svn_url: "https://github.com/ptranny/javascript-carnival",

            size: 990,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 76,

            archived: false,
            disabled: false,
            open_issues_count: 0,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 76,
            open_issues: 0,
            watchers: 0,
            default_branch: "main",
            score: 1.0,
        },
        {
            id: 214169980,
            node_id: "MDEwOlJlcG9zaXRvcnkyMTQxNjk5ODA=",
            name: "javascript",
            full_name: "rishkm/javascript",
            private: false,
            owner: {
                login: "rishkm",
                id: 56274370,
                node_id: "MDQ6VXNlcjU2Mjc0Mzcw",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/56274370?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/rishkm",
                html_url: "https://github.com/rishkm",
                followers_url: "https://api.github.com/users/rishkm/followers",
                following_url:
                    "https://api.github.com/users/rishkm/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/rishkm/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/rishkm/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/rishkm/subscriptions",
                organizations_url: "https://api.github.com/users/rishkm/orgs",
                repos_url: "https://api.github.com/users/rishkm/repos",
                events_url:
                    "https://api.github.com/users/rishkm/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/rishkm/received_events",
                type: "User",
                user_view_type: "public",
                site_admin: false,
            },
            html_url: "https://github.com/rishkm/javascript",

            fork: false,
            url: "https://api.github.com/repos/rishkm/javascript",
            forks_url: "https://api.github.com/repos/rishkm/javascript/forks",
            keys_url:
                "https://api.github.com/repos/rishkm/javascript/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/rishkm/javascript/collaborators{/collaborator}",
            teams_url: "https://api.github.com/repos/rishkm/javascript/teams",
            hooks_url: "https://api.github.com/repos/rishkm/javascript/hooks",
            issue_events_url:
                "https://api.github.com/repos/rishkm/javascript/issues/events{/number}",
            events_url: "https://api.github.com/repos/rishkm/javascript/events",
            assignees_url:
                "https://api.github.com/repos/rishkm/javascript/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/rishkm/javascript/branches{/branch}",
            tags_url: "https://api.github.com/repos/rishkm/javascript/tags",
            blobs_url:
                "https://api.github.com/repos/rishkm/javascript/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/rishkm/javascript/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/rishkm/javascript/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/rishkm/javascript/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/rishkm/javascript/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/rishkm/javascript/languages",
            stargazers_url:
                "https://api.github.com/repos/rishkm/javascript/stargazers",
            contributors_url:
                "https://api.github.com/repos/rishkm/javascript/contributors",
            subscribers_url:
                "https://api.github.com/repos/rishkm/javascript/subscribers",
            subscription_url:
                "https://api.github.com/repos/rishkm/javascript/subscription",
            commits_url:
                "https://api.github.com/repos/rishkm/javascript/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/rishkm/javascript/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/rishkm/javascript/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/rishkm/javascript/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/rishkm/javascript/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/rishkm/javascript/compare/{base}...{head}",
            merges_url: "https://api.github.com/repos/rishkm/javascript/merges",
            archive_url:
                "https://api.github.com/repos/rishkm/javascript/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/rishkm/javascript/downloads",
            issues_url:
                "https://api.github.com/repos/rishkm/javascript/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/rishkm/javascript/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/rishkm/javascript/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/rishkm/javascript/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/rishkm/javascript/labels{/name}",
            releases_url:
                "https://api.github.com/repos/rishkm/javascript/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/rishkm/javascript/deployments",
            created_at: "2019-10-10T11:53:39Z",
            updated_at: "2019-10-10T11:53:41Z",
            pushed_at: "2020-10-01T07:04:30Z",
            git_url: "git://github.com/rishkm/javascript.git",
            ssh_url: "git@github.com:rishkm/javascript.git",
            clone_url: "https://github.com/rishkm/javascript.git",
            svn_url: "https://github.com/rishkm/javascript",

            size: 0,
            stargazers_count: 0,
            watchers_count: 0,
            language: null,
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 19,

            archived: false,
            disabled: false,
            open_issues_count: 1,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 19,
            open_issues: 1,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 234509024,
            node_id: "MDEwOlJlcG9zaXRvcnkyMzQ1MDkwMjQ=",
            name: "itss_std_javascript",
            full_name: "KazukiHirata-sun/itss_std_javascript",
            private: false,
            owner: {
                login: "KazukiHirata-sun",
                id: 48670108,
                node_id: "MDQ6VXNlcjQ4NjcwMTA4",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/48670108?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/KazukiHirata-sun",
                html_url: "https://github.com/KazukiHirata-sun",
                followers_url:
                    "https://api.github.com/users/KazukiHirata-sun/followers",
                following_url:
                    "https://api.github.com/users/KazukiHirata-sun/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/KazukiHirata-sun/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/KazukiHirata-sun/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/KazukiHirata-sun/subscriptions",
                organizations_url:
                    "https://api.github.com/users/KazukiHirata-sun/orgs",
                repos_url:
                    "https://api.github.com/users/KazukiHirata-sun/repos",
                events_url:
                    "https://api.github.com/users/KazukiHirata-sun/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/KazukiHirata-sun/received_events",
                type: "User",
                user_view_type: "public",
                site_admin: false,
            },
            html_url: "https://github.com/KazukiHirata-sun/itss_std_javascript",

            fork: false,
            url: "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript",
            forks_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/forks",
            keys_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/teams",
            hooks_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/hooks",
            issue_events_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/events",
            assignees_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/tags",
            blobs_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/languages",
            stargazers_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/stargazers",
            contributors_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/contributors",
            subscribers_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/subscribers",
            subscription_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/subscription",
            commits_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/merges",
            archive_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/downloads",
            issues_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/labels{/name}",
            releases_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/KazukiHirata-sun/itss_std_javascript/deployments",
            created_at: "2020-01-17T08:52:11Z",
            updated_at: "2020-01-20T03:54:39Z",
            pushed_at: "2020-03-30T03:20:37Z",
            git_url:
                "git://github.com/KazukiHirata-sun/itss_std_javascript.git",
            ssh_url: "git@github.com:KazukiHirata-sun/itss_std_javascript.git",
            clone_url:
                "https://github.com/KazukiHirata-sun/itss_std_javascript.git",
            svn_url: "https://github.com/KazukiHirata-sun/itss_std_javascript",

            size: 1,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 88,

            archived: false,
            disabled: false,
            open_issues_count: 2,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 88,
            open_issues: 2,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 105548866,
            node_id: "MDEwOlJlcG9zaXRvcnkxMDU1NDg4NjY=",
            name: "JavaScript-I-Mini",
            full_name: "bloominstituteoftechnology/JavaScript-I-Mini",
            private: false,
            owner: {
                login: "bloominstituteoftechnology",
                id: 24780114,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjI0NzgwMTE0",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/24780114?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/bloominstituteoftechnology",
                html_url: "https://github.com/bloominstituteoftechnology",
                followers_url:
                    "https://api.github.com/users/bloominstituteoftechnology/followers",
                following_url:
                    "https://api.github.com/users/bloominstituteoftechnology/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/bloominstituteoftechnology/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/bloominstituteoftechnology/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/bloominstituteoftechnology/subscriptions",
                organizations_url:
                    "https://api.github.com/users/bloominstituteoftechnology/orgs",
                repos_url:
                    "https://api.github.com/users/bloominstituteoftechnology/repos",
                events_url:
                    "https://api.github.com/users/bloominstituteoftechnology/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/bloominstituteoftechnology/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/bloominstituteoftechnology/JavaScript-I-Mini",

            fork: false,
            url: "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini",
            forks_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/forks",
            keys_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/teams",
            hooks_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/hooks",
            issue_events_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/events",
            assignees_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/tags",
            blobs_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/languages",
            stargazers_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/stargazers",
            contributors_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/contributors",
            subscribers_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/subscribers",
            subscription_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/subscription",
            commits_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/merges",
            archive_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/downloads",
            issues_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/labels{/name}",
            releases_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/bloominstituteoftechnology/JavaScript-I-Mini/deployments",
            created_at: "2017-10-02T15:08:27Z",
            updated_at: "2018-02-20T01:10:50Z",
            pushed_at: "2018-02-20T16:59:34Z",
            git_url:
                "git://github.com/bloominstituteoftechnology/JavaScript-I-Mini.git",
            ssh_url:
                "git@github.com:bloominstituteoftechnology/JavaScript-I-Mini.git",
            clone_url:
                "https://github.com/bloominstituteoftechnology/JavaScript-I-Mini.git",
            svn_url:
                "https://github.com/bloominstituteoftechnology/JavaScript-I-Mini",

            size: 46,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 107,

            archived: false,
            disabled: false,
            open_issues_count: 35,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 107,
            open_issues: 35,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 265196757,
            node_id: "MDEwOlJlcG9zaXRvcnkyNjUxOTY3NTc=",
            name: "javascript-basic-exercise",
            full_name: "TWU-C-Tech-Trainee/javascript-basic-exercise",
            private: false,
            owner: {
                login: "TWU-C-Tech-Trainee",
                id: 64889404,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjY0ODg5NDA0",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/64889404?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/TWU-C-Tech-Trainee",
                html_url: "https://github.com/TWU-C-Tech-Trainee",
                followers_url:
                    "https://api.github.com/users/TWU-C-Tech-Trainee/followers",
                following_url:
                    "https://api.github.com/users/TWU-C-Tech-Trainee/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/TWU-C-Tech-Trainee/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/TWU-C-Tech-Trainee/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/TWU-C-Tech-Trainee/subscriptions",
                organizations_url:
                    "https://api.github.com/users/TWU-C-Tech-Trainee/orgs",
                repos_url:
                    "https://api.github.com/users/TWU-C-Tech-Trainee/repos",
                events_url:
                    "https://api.github.com/users/TWU-C-Tech-Trainee/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/TWU-C-Tech-Trainee/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/TWU-C-Tech-Trainee/javascript-basic-exercise",

            fork: false,
            url: "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise",
            forks_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/forks",
            keys_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/teams",
            hooks_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/hooks",
            issue_events_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/events",
            assignees_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/tags",
            blobs_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/languages",
            stargazers_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/stargazers",
            contributors_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/contributors",
            subscribers_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/subscribers",
            subscription_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/subscription",
            commits_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/merges",
            archive_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/downloads",
            issues_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/labels{/name}",
            releases_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/TWU-C-Tech-Trainee/javascript-basic-exercise/deployments",
            created_at: "2020-05-19T08:58:37Z",
            updated_at: "2020-07-16T03:09:46Z",
            pushed_at: "2023-01-06T06:21:26Z",
            git_url:
                "git://github.com/TWU-C-Tech-Trainee/javascript-basic-exercise.git",
            ssh_url:
                "git@github.com:TWU-C-Tech-Trainee/javascript-basic-exercise.git",
            clone_url:
                "https://github.com/TWU-C-Tech-Trainee/javascript-basic-exercise.git",
            svn_url:
                "https://github.com/TWU-C-Tech-Trainee/javascript-basic-exercise",

            size: 289,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 87,

            archived: false,
            disabled: false,
            open_issues_count: 11,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 87,
            open_issues: 11,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 64949815,
            node_id: "MDEwOlJlcG9zaXRvcnk2NDk0OTgxNQ==",
            name: "javascript-lodash-templates-lab-v-000",
            full_name:
                "learn-co-students/javascript-lodash-templates-lab-v-000",
            private: false,
            owner: {
                login: "learn-co-students",
                id: 8825476,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjg4MjU0NzY=",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/8825476?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/learn-co-students",
                html_url: "https://github.com/learn-co-students",
                followers_url:
                    "https://api.github.com/users/learn-co-students/followers",
                following_url:
                    "https://api.github.com/users/learn-co-students/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/learn-co-students/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/learn-co-students/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/learn-co-students/subscriptions",
                organizations_url:
                    "https://api.github.com/users/learn-co-students/orgs",
                repos_url:
                    "https://api.github.com/users/learn-co-students/repos",
                events_url:
                    "https://api.github.com/users/learn-co-students/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/learn-co-students/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/learn-co-students/javascript-lodash-templates-lab-v-000",

            fork: false,
            url: "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000",
            forks_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/forks",
            keys_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/teams",
            hooks_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/hooks",
            issue_events_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/events",
            assignees_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/tags",
            blobs_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/languages",
            stargazers_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/stargazers",
            contributors_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/contributors",
            subscribers_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/subscribers",
            subscription_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/subscription",
            commits_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/merges",
            archive_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/downloads",
            issues_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/labels{/name}",
            releases_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/learn-co-students/javascript-lodash-templates-lab-v-000/deployments",
            created_at: "2016-08-04T16:21:43Z",
            updated_at: "2016-08-04T16:21:49Z",
            pushed_at: "2018-08-16T22:08:51Z",
            git_url:
                "git://github.com/learn-co-students/javascript-lodash-templates-lab-v-000.git",
            ssh_url:
                "git@github.com:learn-co-students/javascript-lodash-templates-lab-v-000.git",
            clone_url:
                "https://github.com/learn-co-students/javascript-lodash-templates-lab-v-000.git",
            svn_url:
                "https://github.com/learn-co-students/javascript-lodash-templates-lab-v-000",

            size: 31,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            has_discussions: false,
            forks_count: 158,

            archived: false,
            disabled: false,
            open_issues_count: 166,
            license: {
                key: "other",
                name: "Other",
                spdx_id: "NOASSERTION",

                node_id: "MDc6TGljZW5zZTA=",
            },
            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 158,
            open_issues: 166,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 156398028,
            node_id: "MDEwOlJlcG9zaXRvcnkxNTYzOTgwMjg=",
            name: "javascript-task-5",
            full_name: "urfu-2018/javascript-task-5",
            private: false,
            owner: {
                login: "urfu-2018",
                id: 43127233,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjQzMTI3MjMz",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/43127233?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/urfu-2018",
                html_url: "https://github.com/urfu-2018",
                followers_url:
                    "https://api.github.com/users/urfu-2018/followers",
                following_url:
                    "https://api.github.com/users/urfu-2018/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/urfu-2018/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/urfu-2018/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/urfu-2018/subscriptions",
                organizations_url:
                    "https://api.github.com/users/urfu-2018/orgs",
                repos_url: "https://api.github.com/users/urfu-2018/repos",
                events_url:
                    "https://api.github.com/users/urfu-2018/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/urfu-2018/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url: "https://github.com/urfu-2018/javascript-task-5",
            description: "Задача «Свадьба Аркадия»",
            fork: false,
            url: "https://api.github.com/repos/urfu-2018/javascript-task-5",
            forks_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/forks",
            keys_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/teams",
            hooks_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/hooks",
            issue_events_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/events",
            assignees_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/tags",
            blobs_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/languages",
            stargazers_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/stargazers",
            contributors_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/contributors",
            subscribers_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/subscribers",
            subscription_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/subscription",
            commits_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/merges",
            archive_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/downloads",
            issues_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/labels{/name}",
            releases_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/urfu-2018/javascript-task-5/deployments",
            created_at: "2018-11-06T14:41:36Z",
            updated_at: "2018-11-06T15:02:17Z",
            pushed_at: "2019-01-08T15:33:50Z",
            git_url: "git://github.com/urfu-2018/javascript-task-5.git",
            ssh_url: "git@github.com:urfu-2018/javascript-task-5.git",
            clone_url: "https://github.com/urfu-2018/javascript-task-5.git",
            svn_url: "https://github.com/urfu-2018/javascript-task-5",

            size: 15,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 87,

            archived: false,
            disabled: false,
            open_issues_count: 2,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 87,
            open_issues: 2,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 296700931,
            node_id: "MDEwOlJlcG9zaXRvcnkyOTY3MDA5MzE=",
            name: "javascript-greatest-pokemons",
            full_name: "ManishPoduval/javascript-greatest-pokemons",
            private: false,
            owner: {
                login: "ManishPoduval",
                id: 21152351,
                node_id: "MDQ6VXNlcjIxMTUyMzUx",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/21152351?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/ManishPoduval",
                html_url: "https://github.com/ManishPoduval",
                followers_url:
                    "https://api.github.com/users/ManishPoduval/followers",
                following_url:
                    "https://api.github.com/users/ManishPoduval/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/ManishPoduval/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/ManishPoduval/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/ManishPoduval/subscriptions",
                organizations_url:
                    "https://api.github.com/users/ManishPoduval/orgs",
                repos_url: "https://api.github.com/users/ManishPoduval/repos",
                events_url:
                    "https://api.github.com/users/ManishPoduval/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/ManishPoduval/received_events",
                type: "User",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/ManishPoduval/javascript-greatest-pokemons",

            fork: false,
            url: "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons",
            forks_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/forks",
            keys_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/teams",
            hooks_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/hooks",
            issue_events_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/events",
            assignees_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/tags",
            blobs_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/languages",
            stargazers_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/stargazers",
            contributors_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/contributors",
            subscribers_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/subscribers",
            subscription_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/subscription",
            commits_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/merges",
            archive_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/downloads",
            issues_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/labels{/name}",
            releases_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/ManishPoduval/javascript-greatest-pokemons/deployments",
            created_at: "2020-09-18T18:31:02Z",
            updated_at: "2023-05-10T13:55:54Z",
            pushed_at: "2024-08-15T15:23:21Z",
            git_url:
                "git://github.com/ManishPoduval/javascript-greatest-pokemons.git",
            ssh_url:
                "git@github.com:ManishPoduval/javascript-greatest-pokemons.git",
            clone_url:
                "https://github.com/ManishPoduval/javascript-greatest-pokemons.git",
            svn_url:
                "https://github.com/ManishPoduval/javascript-greatest-pokemons",

            size: 129,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 148,

            archived: false,
            disabled: false,
            open_issues_count: 32,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 148,
            open_issues: 32,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 64949750,
            node_id: "MDEwOlJlcG9zaXRvcnk2NDk0OTc1MA==",
            name: "javascript-first-class-functions-lab-v-000",
            full_name:
                "learn-co-students/javascript-first-class-functions-lab-v-000",
            private: false,
            owner: {
                login: "learn-co-students",
                id: 8825476,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjg4MjU0NzY=",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/8825476?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/learn-co-students",
                html_url: "https://github.com/learn-co-students",
                followers_url:
                    "https://api.github.com/users/learn-co-students/followers",
                following_url:
                    "https://api.github.com/users/learn-co-students/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/learn-co-students/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/learn-co-students/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/learn-co-students/subscriptions",
                organizations_url:
                    "https://api.github.com/users/learn-co-students/orgs",
                repos_url:
                    "https://api.github.com/users/learn-co-students/repos",
                events_url:
                    "https://api.github.com/users/learn-co-students/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/learn-co-students/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/learn-co-students/javascript-first-class-functions-lab-v-000",

            fork: false,
            url: "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000",
            forks_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/forks",
            keys_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/teams",
            hooks_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/hooks",
            issue_events_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/events",
            assignees_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/tags",
            blobs_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/languages",
            stargazers_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/stargazers",
            contributors_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/contributors",
            subscribers_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/subscribers",
            subscription_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/subscription",
            commits_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/merges",
            archive_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/downloads",
            issues_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/labels{/name}",
            releases_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/learn-co-students/javascript-first-class-functions-lab-v-000/deployments",
            created_at: "2016-08-04T16:20:49Z",
            updated_at: "2020-07-30T12:36:37Z",
            pushed_at: "2019-06-19T19:44:43Z",
            git_url:
                "git://github.com/learn-co-students/javascript-first-class-functions-lab-v-000.git",
            ssh_url:
                "git@github.com:learn-co-students/javascript-first-class-functions-lab-v-000.git",
            clone_url:
                "https://github.com/learn-co-students/javascript-first-class-functions-lab-v-000.git",
            svn_url:
                "https://github.com/learn-co-students/javascript-first-class-functions-lab-v-000",

            size: 12,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            has_discussions: false,
            forks_count: 197,

            archived: false,
            disabled: false,
            open_issues_count: 211,
            license: {
                key: "other",
                name: "Other",
                spdx_id: "NOASSERTION",

                node_id: "MDc6TGljZW5zZTA=",
            },
            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 197,
            open_issues: 211,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 8964574,
            node_id: "MDEwOlJlcG9zaXRvcnk4OTY0NTc0",
            name: "GeoMap",
            full_name: "ctc0911/GeoMap",
            private: false,
            owner: {
                login: "ctc0911",
                id: 3946422,
                node_id: "MDQ6VXNlcjM5NDY0MjI=",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/3946422?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/ctc0911",
                html_url: "https://github.com/ctc0911",
                followers_url: "https://api.github.com/users/ctc0911/followers",
                following_url:
                    "https://api.github.com/users/ctc0911/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/ctc0911/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/ctc0911/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/ctc0911/subscriptions",
                organizations_url: "https://api.github.com/users/ctc0911/orgs",
                repos_url: "https://api.github.com/users/ctc0911/repos",
                events_url:
                    "https://api.github.com/users/ctc0911/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/ctc0911/received_events",
                type: "User",
                user_view_type: "public",
                site_admin: false,
            },
            html_url: "https://github.com/ctc0911/GeoMap",
            description: "JavaScript geoJSON map",
            fork: false,
            url: "https://api.github.com/repos/ctc0911/GeoMap",
            forks_url: "https://api.github.com/repos/ctc0911/GeoMap/forks",
            keys_url:
                "https://api.github.com/repos/ctc0911/GeoMap/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/ctc0911/GeoMap/collaborators{/collaborator}",
            teams_url: "https://api.github.com/repos/ctc0911/GeoMap/teams",
            hooks_url: "https://api.github.com/repos/ctc0911/GeoMap/hooks",
            issue_events_url:
                "https://api.github.com/repos/ctc0911/GeoMap/issues/events{/number}",
            events_url: "https://api.github.com/repos/ctc0911/GeoMap/events",
            assignees_url:
                "https://api.github.com/repos/ctc0911/GeoMap/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/ctc0911/GeoMap/branches{/branch}",
            tags_url: "https://api.github.com/repos/ctc0911/GeoMap/tags",
            blobs_url:
                "https://api.github.com/repos/ctc0911/GeoMap/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/ctc0911/GeoMap/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/ctc0911/GeoMap/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/ctc0911/GeoMap/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/ctc0911/GeoMap/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/ctc0911/GeoMap/languages",
            stargazers_url:
                "https://api.github.com/repos/ctc0911/GeoMap/stargazers",
            contributors_url:
                "https://api.github.com/repos/ctc0911/GeoMap/contributors",
            subscribers_url:
                "https://api.github.com/repos/ctc0911/GeoMap/subscribers",
            subscription_url:
                "https://api.github.com/repos/ctc0911/GeoMap/subscription",
            commits_url:
                "https://api.github.com/repos/ctc0911/GeoMap/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/ctc0911/GeoMap/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/ctc0911/GeoMap/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/ctc0911/GeoMap/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/ctc0911/GeoMap/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/ctc0911/GeoMap/compare/{base}...{head}",
            merges_url: "https://api.github.com/repos/ctc0911/GeoMap/merges",
            archive_url:
                "https://api.github.com/repos/ctc0911/GeoMap/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/ctc0911/GeoMap/downloads",
            issues_url:
                "https://api.github.com/repos/ctc0911/GeoMap/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/ctc0911/GeoMap/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/ctc0911/GeoMap/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/ctc0911/GeoMap/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/ctc0911/GeoMap/labels{/name}",
            releases_url:
                "https://api.github.com/repos/ctc0911/GeoMap/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/ctc0911/GeoMap/deployments",
            created_at: "2013-03-23T02:14:06Z",
            updated_at: "2021-09-23T09:02:49Z",
            pushed_at: "2013-02-13T08:33:19Z",
            git_url: "git://github.com/ctc0911/GeoMap.git",
            ssh_url: "git@github.com:ctc0911/GeoMap.git",
            clone_url: "https://github.com/ctc0911/GeoMap.git",
            svn_url: "https://github.com/ctc0911/GeoMap",

            size: 552,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 183,

            archived: false,
            disabled: false,
            open_issues_count: 0,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 183,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 116587696,
            node_id: "MDEwOlJlcG9zaXRvcnkxMTY1ODc2OTY=",
            name: "javascript-arrays-lab-abcp",
            full_name: "learn-co-students/javascript-arrays-lab-abcp",
            private: false,
            owner: {
                login: "learn-co-students",
                id: 8825476,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjg4MjU0NzY=",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/8825476?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/learn-co-students",
                html_url: "https://github.com/learn-co-students",
                followers_url:
                    "https://api.github.com/users/learn-co-students/followers",
                following_url:
                    "https://api.github.com/users/learn-co-students/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/learn-co-students/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/learn-co-students/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/learn-co-students/subscriptions",
                organizations_url:
                    "https://api.github.com/users/learn-co-students/orgs",
                repos_url:
                    "https://api.github.com/users/learn-co-students/repos",
                events_url:
                    "https://api.github.com/users/learn-co-students/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/learn-co-students/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/learn-co-students/javascript-arrays-lab-abcp",

            fork: false,
            url: "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp",
            forks_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/forks",
            keys_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/teams",
            hooks_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/hooks",
            issue_events_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/events",
            assignees_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/tags",
            blobs_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/languages",
            stargazers_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/stargazers",
            contributors_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/contributors",
            subscribers_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/subscribers",
            subscription_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/subscription",
            commits_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/merges",
            archive_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/downloads",
            issues_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/labels{/name}",
            releases_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/learn-co-students/javascript-arrays-lab-abcp/deployments",
            created_at: "2018-01-07T18:06:10Z",
            updated_at: "2018-01-07T18:06:16Z",
            pushed_at: "2018-05-23T16:58:28Z",
            git_url:
                "git://github.com/learn-co-students/javascript-arrays-lab-abcp.git",
            ssh_url:
                "git@github.com:learn-co-students/javascript-arrays-lab-abcp.git",
            clone_url:
                "https://github.com/learn-co-students/javascript-arrays-lab-abcp.git",
            svn_url:
                "https://github.com/learn-co-students/javascript-arrays-lab-abcp",

            size: 92,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            has_discussions: false,
            forks_count: 104,

            archived: false,
            disabled: false,
            open_issues_count: 81,
            license: {
                key: "other",
                name: "Other",
                spdx_id: "NOASSERTION",

                node_id: "MDc6TGljZW5zZTA=",
            },
            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 104,
            open_issues: 81,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 170137350,
            node_id: "MDEwOlJlcG9zaXRvcnkxNzAxMzczNTA=",
            name: "javascript-overview",
            full_name: "profcase/javascript-overview",
            private: false,
            owner: {
                login: "profcase",
                id: 13016674,
                node_id: "MDQ6VXNlcjEzMDE2Njc0",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/13016674?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/profcase",
                html_url: "https://github.com/profcase",
                followers_url:
                    "https://api.github.com/users/profcase/followers",
                following_url:
                    "https://api.github.com/users/profcase/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/profcase/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/profcase/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/profcase/subscriptions",
                organizations_url: "https://api.github.com/users/profcase/orgs",
                repos_url: "https://api.github.com/users/profcase/repos",
                events_url:
                    "https://api.github.com/users/profcase/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/profcase/received_events",
                type: "User",
                user_view_type: "public",
                site_admin: false,
            },
            html_url: "https://github.com/profcase/javascript-overview",
            description:
                "Practice basic features of JavaScript - get two inputs and handle events",
            fork: false,
            url: "https://api.github.com/repos/profcase/javascript-overview",
            forks_url:
                "https://api.github.com/repos/profcase/javascript-overview/forks",
            keys_url:
                "https://api.github.com/repos/profcase/javascript-overview/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/profcase/javascript-overview/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/profcase/javascript-overview/teams",
            hooks_url:
                "https://api.github.com/repos/profcase/javascript-overview/hooks",
            issue_events_url:
                "https://api.github.com/repos/profcase/javascript-overview/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/profcase/javascript-overview/events",
            assignees_url:
                "https://api.github.com/repos/profcase/javascript-overview/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/profcase/javascript-overview/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/profcase/javascript-overview/tags",
            blobs_url:
                "https://api.github.com/repos/profcase/javascript-overview/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/profcase/javascript-overview/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/profcase/javascript-overview/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/profcase/javascript-overview/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/profcase/javascript-overview/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/profcase/javascript-overview/languages",
            stargazers_url:
                "https://api.github.com/repos/profcase/javascript-overview/stargazers",
            contributors_url:
                "https://api.github.com/repos/profcase/javascript-overview/contributors",
            subscribers_url:
                "https://api.github.com/repos/profcase/javascript-overview/subscribers",
            subscription_url:
                "https://api.github.com/repos/profcase/javascript-overview/subscription",
            commits_url:
                "https://api.github.com/repos/profcase/javascript-overview/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/profcase/javascript-overview/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/profcase/javascript-overview/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/profcase/javascript-overview/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/profcase/javascript-overview/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/profcase/javascript-overview/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/profcase/javascript-overview/merges",
            archive_url:
                "https://api.github.com/repos/profcase/javascript-overview/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/profcase/javascript-overview/downloads",
            issues_url:
                "https://api.github.com/repos/profcase/javascript-overview/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/profcase/javascript-overview/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/profcase/javascript-overview/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/profcase/javascript-overview/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/profcase/javascript-overview/labels{/name}",
            releases_url:
                "https://api.github.com/repos/profcase/javascript-overview/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/profcase/javascript-overview/deployments",
            created_at: "2019-02-11T13:55:16Z",
            updated_at: "2019-09-10T19:29:21Z",
            pushed_at: "2019-09-10T19:29:19Z",
            git_url: "git://github.com/profcase/javascript-overview.git",
            ssh_url: "git@github.com:profcase/javascript-overview.git",
            clone_url: "https://github.com/profcase/javascript-overview.git",
            svn_url: "https://github.com/profcase/javascript-overview",
            homepage: "https://profcase.github.io/javascript-overview/",
            size: 4,
            stargazers_count: 0,
            watchers_count: 0,
            language: "HTML",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: true,
            has_discussions: false,
            forks_count: 69,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,
            visibility: "public",
            forks: 69,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 156907155,
            node_id: "MDEwOlJlcG9zaXRvcnkxNTY5MDcxNTU=",
            name: "js-adagrams",
            full_name: "AdaGold/js-adagrams",
            private: false,
            owner: {
                login: "AdaGold",
                id: 14097268,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjE0MDk3MjY4",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/14097268?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/AdaGold",
                html_url: "https://github.com/AdaGold",
                followers_url: "https://api.github.com/users/AdaGold/followers",
                following_url:
                    "https://api.github.com/users/AdaGold/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/AdaGold/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/AdaGold/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/AdaGold/subscriptions",
                organizations_url: "https://api.github.com/users/AdaGold/orgs",
                repos_url: "https://api.github.com/users/AdaGold/repos",
                events_url:
                    "https://api.github.com/users/AdaGold/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/AdaGold/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url: "https://github.com/AdaGold/js-adagrams",
            description: "Adagrams project in JavaScript on Node.js",
            fork: false,
            url: "https://api.github.com/repos/AdaGold/js-adagrams",
            forks_url: "https://api.github.com/repos/AdaGold/js-adagrams/forks",
            keys_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/collaborators{/collaborator}",
            teams_url: "https://api.github.com/repos/AdaGold/js-adagrams/teams",
            hooks_url: "https://api.github.com/repos/AdaGold/js-adagrams/hooks",
            issue_events_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/events",
            assignees_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/branches{/branch}",
            tags_url: "https://api.github.com/repos/AdaGold/js-adagrams/tags",
            blobs_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/languages",
            stargazers_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/stargazers",
            contributors_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/contributors",
            subscribers_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/subscribers",
            subscription_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/subscription",
            commits_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/merges",
            archive_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/downloads",
            issues_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/labels{/name}",
            releases_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/AdaGold/js-adagrams/deployments",
            created_at: "2018-11-09T19:14:24Z",
            updated_at: "2024-10-18T14:57:11Z",
            pushed_at: "2024-10-18T14:57:08Z",
            git_url: "git://github.com/AdaGold/js-adagrams.git",
            ssh_url: "git@github.com:AdaGold/js-adagrams.git",
            clone_url: "https://github.com/AdaGold/js-adagrams.git",
            svn_url: "https://github.com/AdaGold/js-adagrams",
            homepage: "https://adadevelopersacademy.org/",
            size: 668,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 666,
            archived: false,
            disabled: false,
            open_issues_count: 12,
            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,
            visibility: "public",
            forks: 666,
            open_issues: 12,
            watchers: 0,
            default_branch: "main",
            score: 1.0,
        },
        {
            id: 321969566,
            node_id: "MDEwOlJlcG9zaXRvcnkzMjE5Njk1NjY=",
            name: "JavaScript-Core-1-Coursework-Week3",
            full_name: "scarabeo7/JavaScript-Core-1-Coursework-Week3",
            private: false,
            owner: {
                login: "scarabeo7",
                id: 53916760,
                node_id: "MDQ6VXNlcjUzOTE2NzYw",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/53916760?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/scarabeo7",
                html_url: "https://github.com/scarabeo7",
                followers_url:
                    "https://api.github.com/users/scarabeo7/followers",
                following_url:
                    "https://api.github.com/users/scarabeo7/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/scarabeo7/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/scarabeo7/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/scarabeo7/subscriptions",
                organizations_url:
                    "https://api.github.com/users/scarabeo7/orgs",
                repos_url: "https://api.github.com/users/scarabeo7/repos",
                events_url:
                    "https://api.github.com/users/scarabeo7/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/scarabeo7/received_events",
                type: "User",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/scarabeo7/JavaScript-Core-1-Coursework-Week3",

            fork: false,
            url: "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3",
            forks_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/forks",
            keys_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/teams",
            hooks_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/hooks",
            issue_events_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/events",
            assignees_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/tags",
            blobs_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/languages",
            stargazers_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/stargazers",
            contributors_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/contributors",
            subscribers_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/subscribers",
            subscription_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/subscription",
            commits_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/merges",
            archive_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/downloads",
            issues_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/labels{/name}",
            releases_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/scarabeo7/JavaScript-Core-1-Coursework-Week3/deployments",
            created_at: "2020-12-16T12:03:39Z",
            updated_at: "2023-01-03T20:31:57Z",
            pushed_at: "2021-01-08T23:33:35Z",
            git_url:
                "git://github.com/scarabeo7/JavaScript-Core-1-Coursework-Week3.git",
            ssh_url:
                "git@github.com:scarabeo7/JavaScript-Core-1-Coursework-Week3.git",
            clone_url:
                "https://github.com/scarabeo7/JavaScript-Core-1-Coursework-Week3.git",
            svn_url:
                "https://github.com/scarabeo7/JavaScript-Core-1-Coursework-Week3",

            size: 43,
            stargazers_count: 0,
            watchers_count: 0,
            language: null,
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 171,

            archived: false,
            disabled: false,
            open_issues_count: 0,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 171,
            open_issues: 0,
            watchers: 0,
            default_branch: "main",
            score: 1.0,
        },
        {
            id: 63898419,
            node_id: "MDEwOlJlcG9zaXRvcnk2Mzg5ODQxOQ==",
            name: "intermediate-javascript-assessment-old",
            full_name: "DevMountain/intermediate-javascript-assessment-old",
            private: false,
            owner: {
                login: "DevMountain",
                id: 5432151,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjU0MzIxNTE=",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/5432151?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/DevMountain",
                html_url: "https://github.com/DevMountain",
                followers_url:
                    "https://api.github.com/users/DevMountain/followers",
                following_url:
                    "https://api.github.com/users/DevMountain/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/DevMountain/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/DevMountain/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/DevMountain/subscriptions",
                organizations_url:
                    "https://api.github.com/users/DevMountain/orgs",
                repos_url: "https://api.github.com/users/DevMountain/repos",
                events_url:
                    "https://api.github.com/users/DevMountain/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/DevMountain/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/DevMountain/intermediate-javascript-assessment-old",

            fork: false,
            url: "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old",
            forks_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/forks",
            keys_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/teams",
            hooks_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/hooks",
            issue_events_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/events",
            assignees_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/tags",
            blobs_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/languages",
            stargazers_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/stargazers",
            contributors_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/contributors",
            subscribers_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/subscribers",
            subscription_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/subscription",
            commits_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/merges",
            archive_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/downloads",
            issues_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/labels{/name}",
            releases_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/DevMountain/intermediate-javascript-assessment-old/deployments",
            created_at: "2016-07-21T19:55:16Z",
            updated_at: "2017-02-23T20:23:36Z",
            pushed_at: "2017-01-24T17:25:52Z",
            git_url:
                "git://github.com/DevMountain/intermediate-javascript-assessment-old.git",
            ssh_url:
                "git@github.com:DevMountain/intermediate-javascript-assessment-old.git",
            clone_url:
                "https://github.com/DevMountain/intermediate-javascript-assessment-old.git",
            svn_url:
                "https://github.com/DevMountain/intermediate-javascript-assessment-old",

            size: 69,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 96,

            archived: false,
            disabled: false,
            open_issues_count: 0,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 96,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 89926453,
            node_id: "MDEwOlJlcG9zaXRvcnk4OTkyNjQ1Mw==",
            name: "javascript-style-editor-challenge",
            full_name:
                "turingschool-examples/javascript-style-editor-challenge",
            private: false,
            owner: {
                login: "turingschool-examples",
                id: 8518346,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjg1MTgzNDY=",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/8518346?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/turingschool-examples",
                html_url: "https://github.com/turingschool-examples",
                followers_url:
                    "https://api.github.com/users/turingschool-examples/followers",
                following_url:
                    "https://api.github.com/users/turingschool-examples/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/turingschool-examples/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/turingschool-examples/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/turingschool-examples/subscriptions",
                organizations_url:
                    "https://api.github.com/users/turingschool-examples/orgs",
                repos_url:
                    "https://api.github.com/users/turingschool-examples/repos",
                events_url:
                    "https://api.github.com/users/turingschool-examples/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/turingschool-examples/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/turingschool-examples/javascript-style-editor-challenge",

            fork: false,
            url: "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge",
            forks_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/forks",
            keys_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/teams",
            hooks_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/hooks",
            issue_events_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/events",
            assignees_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/tags",
            blobs_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/languages",
            stargazers_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/stargazers",
            contributors_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/contributors",
            subscribers_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/subscribers",
            subscription_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/subscription",
            commits_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/merges",
            archive_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/downloads",
            issues_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/labels{/name}",
            releases_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/turingschool-examples/javascript-style-editor-challenge/deployments",
            created_at: "2017-05-01T13:30:54Z",
            updated_at: "2017-05-01T13:59:42Z",
            pushed_at: "2018-03-14T02:26:43Z",
            git_url:
                "git://github.com/turingschool-examples/javascript-style-editor-challenge.git",
            ssh_url:
                "git@github.com:turingschool-examples/javascript-style-editor-challenge.git",
            clone_url:
                "https://github.com/turingschool-examples/javascript-style-editor-challenge.git",
            svn_url:
                "https://github.com/turingschool-examples/javascript-style-editor-challenge",

            size: 5,
            stargazers_count: 0,
            watchers_count: 0,
            language: "HTML",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 94,

            archived: false,
            disabled: false,
            open_issues_count: 2,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 94,
            open_issues: 2,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 489122497,
            node_id: "R_kgDOHSdqwQ",
            name: "On17-TodasEmTech-JavascriptII",
            full_name: "reprograma/On17-TodasEmTech-JavascriptII",
            private: false,
            owner: {
                login: "reprograma",
                id: 27314899,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjI3MzE0ODk5",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/27314899?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/reprograma",
                html_url: "https://github.com/reprograma",
                followers_url:
                    "https://api.github.com/users/reprograma/followers",
                following_url:
                    "https://api.github.com/users/reprograma/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/reprograma/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/reprograma/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/reprograma/subscriptions",
                organizations_url:
                    "https://api.github.com/users/reprograma/orgs",
                repos_url: "https://api.github.com/users/reprograma/repos",
                events_url:
                    "https://api.github.com/users/reprograma/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/reprograma/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/reprograma/On17-TodasEmTech-JavascriptII",

            fork: false,
            url: "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII",
            forks_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/forks",
            keys_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/teams",
            hooks_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/hooks",
            issue_events_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/events",
            assignees_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/tags",
            blobs_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/languages",
            stargazers_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/stargazers",
            contributors_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/contributors",
            subscribers_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/subscribers",
            subscription_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/subscription",
            commits_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/merges",
            archive_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/downloads",
            issues_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/labels{/name}",
            releases_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/reprograma/On17-TodasEmTech-JavascriptII/deployments",
            created_at: "2022-05-05T20:50:59Z",
            updated_at: "2022-05-29T20:54:00Z",
            pushed_at: "2022-07-27T16:09:43Z",
            git_url:
                "git://github.com/reprograma/On17-TodasEmTech-JavascriptII.git",
            ssh_url:
                "git@github.com:reprograma/On17-TodasEmTech-JavascriptII.git",
            clone_url:
                "https://github.com/reprograma/On17-TodasEmTech-JavascriptII.git",
            svn_url:
                "https://github.com/reprograma/On17-TodasEmTech-JavascriptII",

            size: 11346,
            stargazers_count: 0,
            watchers_count: 0,
            language: "HTML",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 50,

            archived: false,
            disabled: false,
            open_issues_count: 27,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 50,
            open_issues: 27,
            watchers: 0,
            default_branch: "main",
            score: 1.0,
        },
        {
            id: 348333305,
            node_id: "MDEwOlJlcG9zaXRvcnkzNDgzMzMzMDU=",
            name: "javascript-DOM",
            full_name: "marisdanne/javascript-DOM",
            private: false,
            owner: {
                login: "marisdanne",
                id: 24382870,
                node_id: "MDQ6VXNlcjI0MzgyODcw",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/24382870?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/marisdanne",
                html_url: "https://github.com/marisdanne",
                followers_url:
                    "https://api.github.com/users/marisdanne/followers",
                following_url:
                    "https://api.github.com/users/marisdanne/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/marisdanne/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/marisdanne/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/marisdanne/subscriptions",
                organizations_url:
                    "https://api.github.com/users/marisdanne/orgs",
                repos_url: "https://api.github.com/users/marisdanne/repos",
                events_url:
                    "https://api.github.com/users/marisdanne/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/marisdanne/received_events",
                type: "User",
                user_view_type: "public",
                site_admin: false,
            },
            html_url: "https://github.com/marisdanne/javascript-DOM",

            fork: false,
            url: "https://api.github.com/repos/marisdanne/javascript-DOM",
            forks_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/forks",
            keys_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/teams",
            hooks_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/hooks",
            issue_events_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/events",
            assignees_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/tags",
            blobs_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/languages",
            stargazers_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/stargazers",
            contributors_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/contributors",
            subscribers_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/subscribers",
            subscription_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/subscription",
            commits_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/merges",
            archive_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/downloads",
            issues_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/labels{/name}",
            releases_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/marisdanne/javascript-DOM/deployments",
            created_at: "2021-03-16T12:09:19Z",
            updated_at: "2021-03-16T12:09:47Z",
            pushed_at: "2020-09-28T07:05:47Z",
            git_url: "git://github.com/marisdanne/javascript-DOM.git",
            ssh_url: "git@github.com:marisdanne/javascript-DOM.git",
            clone_url: "https://github.com/marisdanne/javascript-DOM.git",
            svn_url: "https://github.com/marisdanne/javascript-DOM",

            size: 7,
            stargazers_count: 0,
            watchers_count: 0,
            language: null,
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 62,

            archived: false,
            disabled: false,
            open_issues_count: 0,

            allow_forking: true,
            is_template: true,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 62,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 95149865,
            node_id: "MDEwOlJlcG9zaXRvcnk5NTE0OTg2NQ==",
            name: "ruby_to_javascript_autopilot",
            full_name: "bitmakerlabs/ruby_to_javascript_autopilot",
            private: false,
            owner: {
                login: "bitmakerlabs",
                id: 2728609,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjI3Mjg2MDk=",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/2728609?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/bitmakerlabs",
                html_url: "https://github.com/bitmakerlabs",
                followers_url:
                    "https://api.github.com/users/bitmakerlabs/followers",
                following_url:
                    "https://api.github.com/users/bitmakerlabs/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/bitmakerlabs/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/bitmakerlabs/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/bitmakerlabs/subscriptions",
                organizations_url:
                    "https://api.github.com/users/bitmakerlabs/orgs",
                repos_url: "https://api.github.com/users/bitmakerlabs/repos",
                events_url:
                    "https://api.github.com/users/bitmakerlabs/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/bitmakerlabs/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/bitmakerlabs/ruby_to_javascript_autopilot",

            fork: false,
            url: "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot",
            forks_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/forks",
            keys_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/teams",
            hooks_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/hooks",
            issue_events_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/events",
            assignees_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/tags",
            blobs_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/languages",
            stargazers_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/stargazers",
            contributors_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/contributors",
            subscribers_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/subscribers",
            subscription_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/subscription",
            commits_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/merges",
            archive_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/downloads",
            issues_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/labels{/name}",
            releases_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/bitmakerlabs/ruby_to_javascript_autopilot/deployments",
            created_at: "2017-06-22T19:33:38Z",
            updated_at: "2017-06-22T19:34:46Z",
            pushed_at: "2017-08-15T19:34:56Z",
            git_url:
                "git://github.com/bitmakerlabs/ruby_to_javascript_autopilot.git",
            ssh_url:
                "git@github.com:bitmakerlabs/ruby_to_javascript_autopilot.git",
            clone_url:
                "https://github.com/bitmakerlabs/ruby_to_javascript_autopilot.git",
            svn_url:
                "https://github.com/bitmakerlabs/ruby_to_javascript_autopilot",

            size: 1,
            stargazers_count: 0,
            watchers_count: 0,
            language: "Ruby",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 96,

            archived: false,
            disabled: false,
            open_issues_count: 0,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 96,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 89928813,
            node_id: "MDEwOlJlcG9zaXRvcnk4OTkyODgxMw==",
            name: "javascript-add-comments-challenge",
            full_name:
                "turingschool-examples/javascript-add-comments-challenge",
            private: false,
            owner: {
                login: "turingschool-examples",
                id: 8518346,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjg1MTgzNDY=",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/8518346?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/turingschool-examples",
                html_url: "https://github.com/turingschool-examples",
                followers_url:
                    "https://api.github.com/users/turingschool-examples/followers",
                following_url:
                    "https://api.github.com/users/turingschool-examples/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/turingschool-examples/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/turingschool-examples/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/turingschool-examples/subscriptions",
                organizations_url:
                    "https://api.github.com/users/turingschool-examples/orgs",
                repos_url:
                    "https://api.github.com/users/turingschool-examples/repos",
                events_url:
                    "https://api.github.com/users/turingschool-examples/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/turingschool-examples/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
            },
            html_url:
                "https://github.com/turingschool-examples/javascript-add-comments-challenge",

            fork: false,
            url: "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge",
            forks_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/forks",
            keys_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/teams",
            hooks_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/hooks",
            issue_events_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/events",
            assignees_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/tags",
            blobs_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/languages",
            stargazers_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/stargazers",
            contributors_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/contributors",
            subscribers_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/subscribers",
            subscription_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/subscription",
            commits_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/merges",
            archive_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/downloads",
            issues_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/labels{/name}",
            releases_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/turingschool-examples/javascript-add-comments-challenge/deployments",
            created_at: "2017-05-01T14:02:50Z",
            updated_at: "2019-06-03T01:04:54Z",
            pushed_at: "2018-03-12T04:33:55Z",
            git_url:
                "git://github.com/turingschool-examples/javascript-add-comments-challenge.git",
            ssh_url:
                "git@github.com:turingschool-examples/javascript-add-comments-challenge.git",
            clone_url:
                "https://github.com/turingschool-examples/javascript-add-comments-challenge.git",
            svn_url:
                "https://github.com/turingschool-examples/javascript-add-comments-challenge",

            size: 6,
            stargazers_count: 0,
            watchers_count: 0,
            language: "HTML",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 93,

            archived: false,
            disabled: false,
            open_issues_count: 1,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 93,
            open_issues: 1,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
        {
            id: 84918226,
            node_id: "MDEwOlJlcG9zaXRvcnk4NDkxODIyNg==",
            name: "Javascript201702",
            full_name: "JokerKangJun/Javascript201702",
            private: false,
            owner: {
                login: "JokerKangJun",
                id: 26397031,
                node_id: "MDQ6VXNlcjI2Mzk3MDMx",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/26397031?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/JokerKangJun",
                html_url: "https://github.com/JokerKangJun",
                followers_url:
                    "https://api.github.com/users/JokerKangJun/followers",
                following_url:
                    "https://api.github.com/users/JokerKangJun/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/JokerKangJun/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/JokerKangJun/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/JokerKangJun/subscriptions",
                organizations_url:
                    "https://api.github.com/users/JokerKangJun/orgs",
                repos_url: "https://api.github.com/users/JokerKangJun/repos",
                events_url:
                    "https://api.github.com/users/JokerKangJun/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/JokerKangJun/received_events",
                type: "User",
                user_view_type: "public",
                site_admin: false,
            },
            html_url: "https://github.com/JokerKangJun/Javascript201702",
            description: "2017年第2期B模块讲义",
            fork: false,
            url: "https://api.github.com/repos/JokerKangJun/Javascript201702",
            forks_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/forks",
            keys_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/teams",
            hooks_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/hooks",
            issue_events_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/events",
            assignees_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/tags",
            blobs_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/languages",
            stargazers_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/stargazers",
            contributors_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/contributors",
            subscribers_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/subscribers",
            subscription_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/subscription",
            commits_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/merges",
            archive_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/downloads",
            issues_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/labels{/name}",
            releases_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/JokerKangJun/Javascript201702/deployments",
            created_at: "2017-03-14T07:21:53Z",
            updated_at: "2018-03-13T13:44:05Z",
            pushed_at: "2017-04-05T08:44:30Z",
            git_url: "git://github.com/JokerKangJun/Javascript201702.git",
            ssh_url: "git@github.com:JokerKangJun/Javascript201702.git",
            clone_url: "https://github.com/JokerKangJun/Javascript201702.git",
            svn_url: "https://github.com/JokerKangJun/Javascript201702",

            size: 2677,
            stargazers_count: 0,
            watchers_count: 0,
            language: "HTML",
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 30,

            archived: false,
            disabled: false,
            open_issues_count: 0,

            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,

            visibility: "public",
            forks: 30,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
            score: 1.0,
        },
    ],
};

export const App = () => {
    // const [isLoading, result, error] = useLoading<IItemList>(
    //     "https://api.github.com/search/repositories?q=javascript&sort=stars&order=asc&page=2"
    // );
    console.log("rerender");
    return (
        <div className={cls.App}>
            {/* {isLoading && <div>Загрузка...</div>}
            {!isLoading && error && <Error>{error.message}</Error>}
            {!isLoading && result && ( */}

            <span>Результат: {testData.total_count}</span>

            <ItemList list={testData as IItemList} />

            {/* )} */}
        </div>
    );
};
