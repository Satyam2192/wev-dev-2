
#include <bits/stdc++.h>
using namespace std;

int main()
{
        
        vector<int> t {73,74,75,71,69,72,76,73};
        vector<int> ans;
        for (int i=0;i<t.size();i++){
            bool found=false;
            for(int j=i+1;j<t.size();j++){
                if(t[j]>t[i]){
                    ans.push_back(j-i);
                    found=true;
                    break;
                }
                
            }
            if(found==false){
                ans.push_back(0)
            }
            
        }
        for (int i=0;i<ans.size();i++){
            cout<<ans[i]<<endl;
        }
    
	return 0;
}

