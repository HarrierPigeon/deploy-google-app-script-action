const GITHUB_DATA = {
    commit_sha:"COMMITSHA",
    action_event_name: "EVENTNAME",
    
    github_actor:"COMMITACTOR",
    job_id:"JOBID",
    
    github_repository: "GITHUBREPOSITORY",
    github_branch_ref: "REFNAME"
};

// COMMIT_SHA: 2269854f2d7af052951419e9481e8f73561f1f9a
//     EVENT_NAME: push
//     COMMIT_ACTOR: HarrierPigeon
//     GITHUB_JOB: deploy
//     GITHUB_REPOSITORY: HarrierPigeon/deploy-google-app-script-action
//     GITHUB_REF_NAME: merge-in-modifications


// sed -ibak -e "s/COMMITSHA/2269854f2d7af052951419e9481e8f73561f1f9a/ s/JOBID/deploy s/REFNAME/merge-in-modifications s/COMMITACTOR/$COMMIT_ACTOR s/EVENTNAME/$EVENT_NAME/" git-info.js
// s/COMMITSHA/$COMMIT_SHA/ s/JOBID/$GITHUB_JOB s/REFNAME/$GITHUB_REF_NAME s/COMMITACTOR/$COMMIT_ACTOR s/EVENTNAME/$EVENT_NAME/" git-info.js