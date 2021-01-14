using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class loadparticularscene : MonoBehaviour
{
    public void loadscene()
    {
        //Load scene called ArFoundationScene
        SceneManager.LoadScene("ArFoundationScene"); 
    }
}
