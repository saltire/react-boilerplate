const childProcess = require('child_process');

// Post-install build script to build dist files on Heroku in production
if (process.env.NODE_ENV === 'production') {
  console.log('Production environment: building client with webpack.');
  childProcess.exec('webpack -p', (err, stdout, stderr) => {
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
    if (err) {
      console.error('exec error:', err);
    }
  });
}
else {
  console.log('Non-production environment: skipping webpack.');
}
