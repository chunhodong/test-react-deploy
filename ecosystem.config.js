module.exports = {
  apps: [
      {
          name: 'limited-share-page',
          script: 'server.js',
          exec_mode: 'cluster',
          log_date_format: 'YYYY-MM-DD HH:mm:ss',
          instances: 'max',
          instance_var: 'INSTANCE_ID',
          env: {
              NODE_ENV: 'development',
              PORT:3000
          },
          env_production: {
              NODE_ENV: 'production',
              PORT:3000
          },
      },
  ],
};