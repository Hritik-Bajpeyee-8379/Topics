#include <iostream>

int main (){
    using namespace std;

    for (int i = 1; i <= 20; i++)
    {
        if (i ==13)
        {
            continue;
        }
        
        cout << i << endl;
    }
    

    return 0;
}