from cv2.cv import *

img = LoadImage("paper.jpg")
NamedWindow("opencv")
ShowImage("opencv",img)
WaitKey(0)
