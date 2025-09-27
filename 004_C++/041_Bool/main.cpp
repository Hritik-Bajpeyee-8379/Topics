#include<iostream>
using namespace std;


void using_bool(bool a , bool b){
    

    cout<<"is On "<<a << endl;
    cout<<"is off "<<b << endl;

}


void using_boolAlpha(bool a , bool b){
    
    cout<<boolalpha;
    cout<<"is On "<<a << endl;
    cout<<"is off "<<b << endl;

}


void using_noboolAlpha(bool a , bool b){
    
    cout<<noboolalpha;
    cout<<"is On "<<a << endl;
    cout<<"is off "<<b << endl;

}

int main(){
    bool a = true;
    bool b = false;
    cout<<"Using Nothing \n";
    using_bool(a,b);
    cout<<"Using boolaplpha \n";
    using_boolAlpha(a,b);
    cout<<"Using noBoolalpha \n";
    using_noboolAlpha(a,b);

    return 0;

}