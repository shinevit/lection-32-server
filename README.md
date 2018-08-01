# Aplication for school or courses

    Entities: students, techers, courses



#### PS: How to sync you forked repository.

1. Clone your fork:

    git clone git@github.com:YOUR-USERNAME/YOUR-FORKED-REPO.git<br>

2. Add remote from original repository in your forked repository:

    cd into/cloned/fork-repo<br>
    git remote add upstream git://github.com/ORIGINAL-DEV-USERNAME/REPO-YOU-FORKED-FROM.git<br>
    git fetch upstream

3. Updating your fork from original repo to keep up with their changes:

    git pull upstream master

4. Check out your fork's local master branch.

    git checkout master

5. Merge the changes from upstream/master into your local master branch. This brings your fork's master branch into sync with the upstream repository, without losing your local changes.

    git merge upstream/master

