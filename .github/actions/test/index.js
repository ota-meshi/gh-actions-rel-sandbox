"use strict"

require("ts-node").register()
const fs = require("fs")
const core = require("@actions/core")
// eslint-disable-next-line node/no-missing-require -- ts
const result = require("../../../src/main")

result.default.then((res) => {
    core.setOutput("updated", res ? 1 : 0)
    const packageJson = fs.readFileSync(
        require.resolve("../../../package.json"),
        "utf8",
    )
    core.setOutput("version", JSON.parse(packageJson).version)
})
