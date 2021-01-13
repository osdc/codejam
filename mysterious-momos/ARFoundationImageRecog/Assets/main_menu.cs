using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class main_menu : MonoBehaviour
{
   public void Scan()
     {
         SceneManager.LoadScene(2);
     }
    public void about()
    {
        SceneManager.LoadScene(1);
    } 

    public void back()
    {
        SceneManager.LoadScene(0);
    }
    public void quit()
    {
        Application.Quit();
    }
}
