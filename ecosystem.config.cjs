module.exports = {
  apps: [{
    name: 'casepay-app',
    script: 'http-server',
    args: 'dist -p 3000 -a 0.0.0.0 --gzip',
    cwd: '/home/casepay/htdocs/casepay.app',
    env: {
      NODE_ENV: 'production'
    },
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
  }]
};
