# JustGiving DNA core components

## JustGiving DNA
For the tools and workflow used to contribute to JustGiving DNA, including this component set, see the [JustGiving DNA documentation](https://github.com/JustGiving/GG.FrontEnd.DNA)

## Install
```bower install git@github.com:JustGiving/GG.FrontEnd.DNA.core.git```

## Update
```bower update dna-core``` updates to latest minor or patch version (backwards compatible)

## Major update
Manually increment the major digit in the version flag in the microsite's ```bower.json``` then ```bower update dna-core```

## Usage
- For Less modules, ```@import``` the required modules into your microsite's Less main file
- For javascript modules, ```require()``` the required modules into your microsite's javascript main file and use them as needed

## About
- ```dna-core``` is a base dependency of all other DNA component sets and of all microsites and is assumed to always be available. Making transitive dependences between ```dna-core``` and other DNA component sets is considered 'safe'. ```dna-core``` contains Less and JS dependencies that almost all DNA component sets and microsites will need to access. For more details see the [Transitive dependencies and GG.FrontEnd.DNA.core section in JustGiving DNA documentation](https://github.com/leanne1/GG.FrontEnd.DNA#transitive-dependencies-and-ggfrontenddnacore).

## Release
- TODO: (@LeeEllam) Automate releasing with gulp [https://github.com/gulpjs/gulp/blob/master/docs/recipes/bump-version-and-create-git-tag.md] and  document the process here 
- [Pull request](https://www.atlassian.com/git/tutorials/making-a-pull-request/) your changes 
- Git [release](https://github.com/blog/1547-release-your-software) the update, tagging the release with the relevant latest [SemVer](http://semver.org/) 
- Include a description for your release in the release notes field
- If the release is a semver major update, document the changes required to use the release in the release notes

## Transitive dependencies
None of the modues in this component set use [transitive dependencies](https://github.com/JustGiving/GG.FrontEnd.DNA#transitive-dependencies-and-ggfrontenddnacore). ```dna-core``` should never include transitive dependencies.