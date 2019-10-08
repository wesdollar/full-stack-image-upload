# wes - 2019-10-08

## Installation
Run the following commands from you preferred development directory:
* `git clone https://github.com/wesdollar/wes-2019-10-08.git`
* `cd wes-2019-10-08`
* `npm run quickstart`

*NOTE:* please ensure no other services are running on ports `3000` or `5000` before running `npm run quickstart`.

Your default browser should open to `localhost:3000`. If not, navigate to `localhost:3000` in your preferred browser. 

Node will fire up on port `5000`. The client on port `3000` proxies all requests to port `5000` to avoid any CORS issues.

## Security
The following security concerns have been addressed:
* Ensure uploaded files only allow JPG and PNG mimeTypes
* Ensure files do not exceed 10MB
* Search input is sanitized

The following security concerns have not been addressed:
* Rate-limiting the API
* Ensuring sufficient disk is available on upload
* Validating images do not contain NSFW content

## Improvements
* Add unit tests
* Enhance OSD (on-screen display) messages for better handling
* Implement image viewer
* Add drag-and-drop upload support
* Support multiple file upload
* Implement one source-of-truth for config/constant values shared by client and server
* Provide sorting support for file list
* Resort file list after add/delete
* Automatically rename file when file exists with same filename
* Support all displays between 960px+ and iPhone X

## Libraries
Client
* react and related to satisfy requirements (and because it's React)
* `polished` - (*not necessary*) Provides SCSS-like functions such as `darken` and `lighten`
* `prop-types` - Prop checking
* `styled-components` - Scoped styling (who doesn't like a fresh set of nails)
* `eslint` (and related) - enforcement of code-style
* `husky` - pre-commit hook for linting and formatting
* `mocha` - testing (wait... what tests?!)
* `prettier` (and related) - code formatting

Server
* `express` - Needed a backend on the express! (see what I did there?)
* `express-fileupload` - Handle file upload
* `express-validator` - Validate user input

## API
*WARNING* - API is **not** production-ready. Please see improvements sections for more info.

### GET /files
**returns** list of all files in uploads directory

### POST /upload
**param** `imageUpload`: file of type JPG or PNG 
**returns** `response` with `json`

### POST /delete
**param** `filename`: filename to remove from uploads directory
**returns** `response` with `json`

### POST /find
**param** `searchTerm`: term to match against filenames
**returns** `array` of files