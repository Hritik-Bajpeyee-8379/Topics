#include<iostream>

int main(){
    using namespace std;


    // for (int i = 1; i <=3; i++)
    // {
    //       for (int j = 1; j <=10; j++)
    // {
    //     cout << j << ' ';
    // }
    // cout << endl;

    // }
    
    int rows,cols;char symbols;

    cout << "Rows ";
    cin >> rows;
 
    cout << "Cols ";
    cin >> cols;
 
    cout << "Symbols ";
    cin >> symbols;

    for (int i = 1; i <=rows; i++)
    {
        for (int j = 1; j <=cols; j++)
        {
            cout << symbols;
        }
        cout << endl;
        
    }
    
 
    

    return 0;
}