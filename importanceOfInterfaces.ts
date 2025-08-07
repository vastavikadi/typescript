//Why interfaces are important?
interface TakePhoto {
  //interfaces are something that does not care about the implementation or how is it done part only checks the must to do things like here are the types of the property needed, interfaces do not care about definition
  cameraMode: string;
  filter: string;
}

class Instagram implements TakePhoto {
  //this is how classes copies from the interfaces
  constructor(
    public cameraMode: string, //interfaces only checks here if all the things are in place, cannot do less than what is must and can do more
    public filter: string,
    public burst: number
  ) {}
}
interface Story {
  createStory(): void;
}
class Youtube implements TakePhoto, Story {
  ///if youtube wants to implement story and shorts then needs to define all the needed things by both
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}
  createStory(): void {}
}