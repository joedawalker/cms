import { Component, OnInit, Input } from '@angular/core';

import { Contact } from '../contact';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html'
})
export class ContactDetailComponent implements OnInit {

  @Input() selectedContact: Contact;

  constructor() { }

  ngOnInit() {
  }

}
