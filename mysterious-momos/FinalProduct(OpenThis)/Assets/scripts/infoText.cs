using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class infoText : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Text infoTxt = GameObject.Find("Canvas/Text").GetComponent<Text>();
        
        GameObject temp = GameObject.FindWithTag("ARSessionOrigin");
       

        int chk = imagetrack.infoVar;

        if(chk == 0){
            Debug.Log("chk = 0");
            infoTxt.text = "Mona Lisa: If a rectangle is drawn around the face of the ‘Mona Lisa’, the ratio of the height to width of that rectangle is equal to the ‘Golden Ratio’. 3.	At the same time, the spiral beautifully frames her face, with the rounded side on the right, and the vertical side on the left. Also, the spiral winds from the tip of her nose, grazing the bottom of her chin, and all the way around to her right arm, from elbow to thumb.";
        }
        else if(chk == 1)
        {
            Debug.Log("chk = 1");
            infoTxt.text = "Leda Atomica: Leda (the main muse of this painting) and the swan sit inside a pentagon. On connecting the vertices of the pentagon, we get a star.2.	The five points of the star or the five vertices of the pentagon symbolise the origins of perfection: truth, willpower, order, love, and action.";
        }
        else if(chk == 2){
            infoTxt.text = "The Music Lesson: Perspective was also important because it provided the mathematical basis for painting a fact which could itself elevate its traditional lowly hierarchical status from the Mechanical Arts to the Liberal Arts. This concept must have been of considerable importance to Vermeer, who later dedicated his most ambitions work, Art of Painting, to the edification of the status of the painter. src:http://www.essentialvermeer.com/";
        }
        else{
            infoTxt.text = "no info";
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
