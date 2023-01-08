# Contributing to the website hosted at Dogecoin.com

Dogecoin.com is a community-driven effort. The purpose of the website is to offer information and education about Dogecoin, advocate for its adoption, and inform users about safe practices.

Dogecoin.com aims to provide a service to Dogecoin users and to be inclusive. As such, submissions to this repository cannot be an expression of the interests of specific organizations, companies, or individuals.

## Contributor Workflow

The repository is maintained using the "contributor workflow" where everyone without exception contributes to the website using "pull requests". This facilitates social contribution, easy testing, and peer review.

As the repository contains both code contributions and content, the workflow accommodates and facilitates both.

To contribute content to the website, the workflow is as follows:

  - Create a branch within which you will work on your changes.
  - Commit changes to the branch.
  - Raise a Pull Request via GitHub.

To contribute significant structural and code changes to the website, the workflow is as follows:

  - Fork the repository in GitHub, and clone it in your development machine.
  - Create a topic branch, within which you will work on your changes.
  - Commit changes to the branch.
  - Raise a Pull Request via GitHub.

Whenever possible [commits should be atomic](https://en.wikipedia.org/wiki/Atomic_commit#Atomic_commit_convention). This guarantees consistency and readability of the repository history, and it is useful to easily track and revert changes to the website. Whenever possible, commits should not obfuscate the history of past contributions of code or content.

Commit messages should be verbose by default consisting of a short subject line (50 chars max), a blank line and detailed explanatory text as separate
paragraph(s). This is not necessary if the title alone is self-explanatory (like "Corrected typo in cannoli.txt"), in which case a single title line is sufficient. 

The body of the pull request should contain enough description about what your contribution does together with any justification/reasoning. You should include references to any discussions (for example other tickets or mailing list discussions). You can add more commits to your pull request by committing them locally and pushing them to your branch and/or fork until you have satisfied feedback.

With content submissions, in-depth explanations and linking to sources are needed, without exception, in cases of claims concerning the history of Dogecoin and text, images, or other media associated with it.

## Pull Request Philosophy

Pull Requests should always be focused. For example, a pull request could add an article, fix a bug, or refactor code; but not a mixture. Please avoid submitting pull requests that attempt to do too much, are overly large, or overly complex as this makes review difficult.

It is particularly crucial to keep frontend content edits - for example, the creation of new articles or edits to existing ones - separated from code edits and bug fixes.

Just like with code, the history of articles, faqs, and informative sections of the website must be preserved and easy to track and revert.


### Features

When adding a new feature, thought must be given to the long-term maintenance that feature may require after inclusion. Before proposing a new
feature or section to the website that will require maintenance, please consider if you are willing to maintain it (including bug fixing). If features get orphaned with no maintainer in the future, they may be removed.


## "Decision Making" Process

Whether a pull request is merged and published on the website rests with the repository maintainers collaborating with contributors.

Maintainers will take into account the consensus among contributors. Maintainers cannot bypass, at any moment, the need for peer reviews. 

In case of content submissions, maintainers and contributors will consider the quality, soundness, and impartiality of the content, alongside appropriate documentation and factual information corroborating statements within the submitted content.

Maintainers will take into consideration if a submission is in line with the general principles of Dogecoin.

In general, all pull requests must:

  - Have a clear use case, fix a demonstrable bug, or provide content useful to the Dogecoin community;
  - Not be an expression of particular interests of companies, organizations, or individuals;
  - Be focused;
  - Be peer-reviewed;
  - In case of code changes, have gone through functional tests;
  - Follow code and content style guidelines;
  - Not break the website's building process;

The following contributions must come with significant discussion, happening in public and accessible to all, before
approval and merge:

- Major structural changes
- Major content changes
- Linking to third-party resources


### Peer Review

Anyone may participate in peer review which is expressed by comments in the pull request. 

With code submissions, reviewers will review the code for obvious errors and will test new functionality and fixes by generating a local copy of the website on their machine. No approval of code changes and features should come without reasonable testing by at least one reviewer. Repository maintainers take into account the peer review when determining if
there is consensus to merge a pull request.

With content submissions, reviewers will assess the quality of the submission by focusing on the soundness of the claims contained within it (also based on associated documentation), on the quality of the writing (proper grammar, punctuation, clarity), and on whether the content is useful and fitting to the purpose of the website. 

Contributions can be made in any language, but a translation in English of content provided in other languages should be provided by the original contributor or other contributors before it is published on the website.

Maintainers reserve the right to weigh the opinions of peer reviewers using common sense judgment and also may weigh based on meritocracy: those
that have demonstrated a deeper commitment and understanding toward Dogecoin (over time) or have clear domain expertise may naturally have more weight, as one would expect in all walks of life.

### Maintainers
Maintainers are appointed to their role depending on their merits, skills, and contributions to Dogecoin and its community. The composition of the group of maintainers should be diverse and not represent the opinions of a specific organization, company, groups, or individuals. 

At all times, maintainers act following the opinions of peer reviewers and using common sense judgement. Maintainers are appointed to their role after public discussion on Github. After public discussion, their role can be revoked if their past choices are deemed inappropriate or inconsistent.

### Merging pull requests

Maintainers can only merge pull requests after any maintainer, other than the author of a pull request, has approved the submission according to the decision making process outlined above.

Maintainers must keep pull requests open for at least 24 hours after approval to merge is given, to allow anyone to voice a concern that may have been missed in review, or request more time to investigate a suspected issue. 

For submissions containing links to websites and resources managed by third parties, pull requests must be open for at least 72 hours after approval to merge is given.

Requests for time and maintainer decision making are expected to be documented on the pull request discussion on Github.

Time-critical changes containing advisories or security fixes can be exempted from this rule but must be clearly documented and announced to the community using commonly used communication channels.

## Copyright

By contributing to this repository, you agree to license your work under the MIT license unless specified otherwise in `contrib/debian/copyright` or at 
the top of the file itself. Any work contributed where you are not the original author must contain its license header with the original author(s) and source.
