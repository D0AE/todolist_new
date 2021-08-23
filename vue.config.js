module.exports = {
    outputDir: './docs',
    publicPath: '/todolist/',
    devServer: { 
      ///api 요청이 있을 때 해당 요청을 backend 쪽의 /api로 돌려주는 proxy 설정
          proxy: { 
                  '/api': { 
                            target: 'http://localhost:3000/api',
                            changeOrigin: true, 
                            pathRewrite: { 
                                        '^/api': ''
                                      } 
                          } 
                } 
        },
    //frontend 프로젝트를 build했을 때 output이 ../backend/public에 위치
      outputDir: '../backend/public',
  }
  