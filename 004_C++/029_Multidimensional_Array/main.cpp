#include <iostream>
using namespace std;

int main (){

    string cars[][3] = { {"BMW","Thar","Eon"},
                        {"Scorpio","Creata","Venue"},
                        {"Alto","Tiago","SUV"}};

    // cout << cars[0][0]<< " ";
    // cout << cars[0][1]<< " ";
    // cout << cars[0][2]<< "\n";
    // cout << cars[1][0]<< " ";
    // cout << cars[1][1]<< " ";
    // cout << cars[1][2]<< "\n";
    // cout << cars[2][0]<< " ";
    // cout << cars[2][1]<< " ";
    // cout << cars[2][2]<< " ";

    int rows = sizeof(cars)/sizeof(cars[0]);
    int cols = sizeof(cars[0])/sizeof(cars[0][0]);

    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            cout << cars[i][j] << " ";
        }
        cout<< endl;
        
    }
    



  
    int arr[2][2][3];  // 2 blocks, 2 rows, 3 columns

    // Input
    cout << "Enter 12 numbers (2 blocks of 2x3):\n";
    for(int b = 0; b < 2; b++) {
        for(int i = 0; i < 2; i++) {
            for(int j = 0; j < 3; j++) {
                cin >> arr[b][i][j];
            }
        }
    }

    // Output
    cout << "\n3D Array (2 blocks of 2x3):\n";
    for(int b = 0; b < 2; b++) {
        cout << "Block " << b << ":\n";
        for(int i = 0; i < 2; i++) {
            for(int j = 0; j < 3; j++) {
                cout << arr[b][i][j] << " ";
            }
            cout << endl;
        }
        cout << endl;
    }


    return 0;
}