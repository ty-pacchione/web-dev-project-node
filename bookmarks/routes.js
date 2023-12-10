import * as dao from "./dao.js";

function BookmarkRoutes(app) {

    const createBookmark = async (req, res) => {
        const bookmark = await dao.createBookmark(req.params.jobID, req.params.userID);
        res.json(bookmark);
    };
      

    const deleteBookmark = async (req, res) => {
        const status = await dao.deleteBookmark(req.params.jobID, req.params.userID);
        res.json(status);
    };
  

  const findAllBookmarks = async (req, res) => {
    const bookmarks = await dao.findAllBookmarks();
    res.json(bookmarks);
  };


  const findBookmark = async (req, res) => {
    const bookmark = await dao.findBookmark(req.params.jobID, req.params.userID);
    res.json(bookmark);
  };

  const findBookmarksForJob = async (req, res) => {
    try {
        const bookmarks = await dao.findBookmarksForJob(req.params.jobID);
        res.json(bookmarks);
    } catch (error) {
        console.error(error);
        res.sendStatus(404);
    }
    
  };

  const findBookmarksForUser = async (req, res) => {
    try {
        const bookmarks = await dao.findBookmarksForUser(req.params.userID);
        res.json(bookmarks);
    } catch (error) {
        console.error(error);
        res.sendStatus(404);
    }
    
  };
 


  app.get("/api/bookmarks/user/:userID", findBookmarksForUser);
  app.get("/api/bookmarks/job/:jobID", findBookmarksForJob);
  app.post("/api/bookmarks/:jobID/:userID", createBookmark);
  app.delete("/api/bookmarks/:jobID/:userID", deleteBookmark);
  app.get("/api/bookmarks/:jobID/:userID", findBookmark);
  app.get("/api/bookmarks", findAllBookmarks);

  


}
export default BookmarkRoutes;
