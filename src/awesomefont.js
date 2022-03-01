/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faLink, faSignIn, faSignOut, faUserGroup, faUser, faGear } from '@fortawesome/free-solid-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faLink, faSignIn, faSignOut, faUserGroup, faUser, faGear)
/* add font awesome icon component */

export default FontAwesomeIcon