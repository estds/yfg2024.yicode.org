---
layout: page
title: Logistics
lang: en
ref: logistics-page
---
<div class="m-1">
  <ul class="nav nav-pills nav-justified bg-light rounded mb-4" id="logistics-tab" role="tablist">
    <li class="nav-item text-truncate">
      <a class="nav-link text-truncate active" id="venue-tab" data-toggle="tab" href="#venue" role="tab" aria-controls="venue" aria-selected="true"><i class="fas fa-compass fa-fw mr-1"></i>Venue</a>
    </li>
    <li class="nav-item text-truncate">
      <a class="nav-link text-truncate" id="accommodation-tab" data-toggle="tab" href="#accommodation" role="tab" aria-controls="accommodation" aria-selected="false"><i class="fas fa-bed fa-fw mr-1"></i>Accommodation</a>
    </li>
    <li class="nav-item text-truncate">
      <a class="nav-link text-truncate" id="languages-tab" data-toggle="tab" href="#languages" role="tab" aria-controls="languages" aria-selected="false"><i class="fas fa-globe-africa fa-fw mr-1"></i>Languages</a>
    </li>
    <li class="nav-item text-truncate">
      <a class="nav-link text-truncate" id="streaming-tab" data-toggle="tab" href="#streaming" role="tab" aria-controls="streaming" aria-selected="false"><i class="fas fa-video fa-fw mr-1"></i>Streaming</a>
    </li>
  </ul>
  <div class="tab-content" id="logistics">
    <div class="tab-pane fade show active" id="venue" role="tabpanel" aria-labelledby="venue-tab">{% include logistics-venue.html %}</div>
    <div class="tab-pane fade" id="accommodation" role="tabpanel" aria-labelledby="accommodation-tab">{% include logistics-accommodation.html %}</div>
    <div class="tab-pane fade" id="languages" role="tabpanel" aria-labelledby="languages-tab">{% include logistics-langauges.html %}</div>
    <div class="tab-pane fade" id="streaming" role="tabpanel" aria-labelledby="streaming-tab">{% include logistics-streaming.html %}</div>
  </div>
</div>
