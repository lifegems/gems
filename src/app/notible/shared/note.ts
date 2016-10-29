export class Note {
   public book:    number;
   public chapter: number;
   public verse:   number;

   // NOTES, MEDIA, XREFS
   public type:        string; 
   public title:       string;
   public description: string;

   // NOTES, MEDIA
   public pubrefs?: Array<any>;

   // XREFS
   public xref?:  string;
   public xtype?: string;

   // MEDIA
   public url?: string;
}