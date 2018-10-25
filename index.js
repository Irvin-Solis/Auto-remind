module.exports = app => {
  app.on("pull_request.opened", async context => {
    const config = await context.config(`auto-remind.yml`);
    const { pullRequestOpened } = config || {};

    const params = context.issue({ body: pullRequestOpened });

    // Post a comment on the issue
    return context.github.issues.createComment(params);
  });
};
