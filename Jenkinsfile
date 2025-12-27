pipeline {
  agent any

  environment {
    SITE_ROOT = "/var/www/example.com"
    DEPLOY_HOST = "127.0.0.1"
    DEPLOY_USER = "deploy"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
        sh 'test -f dist/index.html'
      }
    }

    stage('Deploy (atomic)') {
      steps {
        sh '''
          set -e
          TS=$(date +%Y%m%d%H%M%S)
          RELEASE_DIR="${SITE_ROOT}/releases/${TS}"

          ssh ${DEPLOY_USER}@${DEPLOY_HOST} "mkdir -p ${RELEASE_DIR}/dist"
          rsync -a --delete dist/ ${DEPLOY_USER}@${DEPLOY_HOST}:${RELEASE_DIR}/dist/
          ssh ${DEPLOY_USER}@${DEPLOY_HOST} "ln -sfn ${RELEASE_DIR} ${SITE_ROOT}/current"
        '''
      }
    }
  }
}
