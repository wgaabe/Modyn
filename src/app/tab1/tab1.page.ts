import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

constructor() {
}

    current: any = 'friends';
    friends = [
        {
            id: 0,
            name: 'André',
            photo: 'http://img.ibxk.com.br/ns/rexposta/2017/01/15/15114738040016.jpg?watermark=neaki&w=600',
            titleimg: 'Partiu Igreja',
        },
        {
            id: 1,
            name: 'Ana Beatriz',
            photo: 'https://i.pinimg.com/236x/0f/5f/2d/0f5f2d93f13e8c0f1eb3976aa581f90d.jpg',
            titleimg: 'Partiu rodeio',
        }
    ];

    nearfriends = [
        {
            id: 1,
            name: 'Cleiton',
            photo: 'https://correio-cdn1.cworks.cloud/fileadmin/_processed_/a/d/csm_thammy_ed88101b2b.jpg',
            titleimg: 'Vamo Dallle',
        },
        {
            id: 2,
            name: 'Roberta',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFkRrtEpDf0wgx4qBJoH33jiawNuRbBLNJm6A9OAA4Vdqa20_&s',
            titleimg: 'Só o pó da gaita',
        }
    ];

    like: any = {
        color: 'dark',
        qtd: {
            0: 10,
            1: 5
        }
    };


updatesearch: boolean = false;

    handleLike(id) {
        this.like.qtd[id]++;
        if (this.like.color === 'dark') {
            this.like.color =  'primary';
        } else {
            this.like.color = 'dark';
        }
    }
    handleDislike(id) {
        this.like.qtd[id]--;
        if (this.like.color === 'dark') {
            this.like.color =  'primary';
        } else {
            this.like.color = 'dark';
        }
    }

    opensearchbar() {
        this.updatesearch = !this.updatesearch;
    }

    segmentChanged(e) {
        this.current = e.detail.value;
    }


}
