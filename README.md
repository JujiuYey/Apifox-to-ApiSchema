## .husky生效的暂时解决办法

#### 1. npm run clean:husky
#### 2.生成 .husky 的文件夹
npx husky install

##### 3.添加 hooks，会在 .husky 目录下生成一个 pre-commit 脚本文件
npx husky add .husky/pre-commit "npx --no-install lint-staged"

##### 4.添加 commit-msg
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

