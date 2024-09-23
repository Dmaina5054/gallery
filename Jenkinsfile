pipeline {
    agent any
    stages {
        //install dependencies
        stage ('Build') {
            steps {
                sh 'npm install'

            }  

        }

        //test code
        stage ('Test') {
            steps {
                sh 'npm test'
            }

        }
        //deploy to render cloud
        stage('Deploy to Render'){
            steps{
               withCredentials([string(credentialsId: 'render_deploy_url', variable: 'SECRET')]) {
                    
                    sh '''
                        curl -X POST ${SECRET} -vvv
                    '''
                    } 
            }
        }

          
    }

    //post build processes
      post {
        always {
            echo 'Sending email for build status'
            
            emailext body: "${currentBuild.currentResult}: Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}",
                recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
                subject: "Jenkins Build ${currentBuild.currentResult}: Job ${env.JOB_NAME}"
            
        }
    }
    
}