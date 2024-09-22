pipeline {
    agent any
    stages {
        //install dependencies
        stage ('Build') {
            steps {
                sh 'npm install'

            }  

        }
        //deploy to render cloud
        stage('Deploy to Render'){
            steps{
               withCredentials([usernameColonPassword(credentialsId: 'render-deploy-hook', variable: 'RENDER_DEPLOY_HOOK')]) {
                    
                    sh '''
                        curl -X POST $RENDER_DEPLOY_HOOK -vvv
                    '''
                    } 
            }
        }

   
          
    }
    
}