const Write = (args, type) => {
      // This is the types of logging that we have. They are all differnt colors
      var types = ['36m[CLIENT]    ', '91m[WARNING]', '31m[ERROR]', '92m[DEBUG]  ']
      // This peice of code is basically a special console.log()
      process.stdout.write(`\u001b[${types[type]}\u001b[39m || ${args}\n`)
}
module.exports = Write
