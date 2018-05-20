const posts = [
  {
    title: 'New York',
    author: 'Ramnath',
    postBody: 'New York is one of the liveliest cities in the United States.',
    timestamp: 'Wed, May 19, 2018 2:07 PM',
    points: 0,
    addPoints() {
      this.points += 1;
    },
    subtractPoints() {
      this.points -= 1;
    },
    comments: [
      
    ],
    showComments: false,
    toggleComments() {
      if (this.showComments === true) {
        this.showComments = false;
      } else {
        this.showComments = true;
      }
    },
    showNewCommentForm: false,
    toggleNewCommentsForm() {
      if (this.showNewCommentForm === true) {
        this.showNewCommentForm = false;
      } else {
        this.showNewCommentForm = true;
      }
    },
  },
  {
    title: 'California',
    author: 'Ramnath',
    postBody: 'Universities in California have a good reputation with tech companies.',
    timestamp: 'Thr, May 19, 2018 2:41 PM',
    points: 1,
    addPoints() {
      this.points += 1;
    },
    subtractPoints() {
      this.points -= 1;
    },
    comments: [
      
    ],
    showComments: false,
    toggleComments() {
      if (this.showComments === true) {
        this.showComments = false;
      } else {
        this.showComments = true;
      }
    },
    showNewCommentForm: false,
    toggleNewCommentsForm() {
      if (this.showNewCommentForm === true) {
        this.showNewCommentForm = false;
      } else {
        this.showNewCommentForm = true;
      }
    },
  }
  
];