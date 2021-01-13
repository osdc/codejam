using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR;
using UnityEngine.XR.ARFoundation;



[RequireComponent(typeof(ARTrackedImageManager))]

public class imagetrack : MonoBehaviour
{

    public static int infoVar = 1;

    [SerializeField]
    private GameObject[] placeablePrefab;

    private Dictionary<string, GameObject> spawnedPrefabs = new Dictionary<string, GameObject>();
    private ARTrackedImageManager trackedImageManager;

    private void Awake()
    {
        Debug.Log("Awake called");
        trackedImageManager = FindObjectOfType<ARTrackedImageManager>();
        foreach(GameObject prefab in placeablePrefab)
        {
            GameObject newPrefab = Instantiate(prefab, Vector3.zero, Quaternion.identity);
            newPrefab.name = prefab.name;
            spawnedPrefabs.Add(prefab.name, newPrefab);
        }
    }

    private void OnEnable()
    {

        Debug.Log("enable called");
        trackedImageManager.trackedImagesChanged += ImageChanged;

    }
    private void OnDisable()
    {
        trackedImageManager.trackedImagesChanged -= ImageChanged;
    }

    private void ImageChanged(ARTrackedImagesChangedEventArgs eventArgs)
    {
        foreach(ARTrackedImage trackedImage in eventArgs.added)
        {
            UpdateImage(trackedImage);
        }
        foreach (ARTrackedImage trackedImage in eventArgs.updated)
        {
            UpdateImage(trackedImage);
        }
        foreach (ARTrackedImage trackedImage in eventArgs.removed)
        {
            spawnedPrefabs[trackedImage.name].gameObject.SetActive(false);
            //Debug.Log(trackedImage.name);
        }
    }
    private void UpdateImage(ARTrackedImage trackedImage)
    {
        string name = trackedImage.referenceImage.name;
        Vector3 position = trackedImage.transform.position;
        Quaternion rotation = trackedImage.transform.rotation;

        GameObject prefab = spawnedPrefabs[name];
        prefab.transform.position = position;
        prefab.transform.rotation = rotation;
        //prefab.SetActive(true);
        prefab.gameObject.SetActive(true);

        if (name == "Monalisa")
        {
            infoVar = 0;
        }
        else if (name == "LedaAtomica")
        {
            infoVar = 1;
        }
        else
        {
            infoVar = 2;
        }
        foreach (GameObject go in spawnedPrefabs.Values)
        {
            if (go.name != name)
            {
                go.gameObject.SetActive(false);
                //go.SetActive(false);
            }
        }
        
    }
}
